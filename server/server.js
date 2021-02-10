const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const matesRoutes = express.Router();
const meetupRoutes = express.Router();
const PORT = process.env.PORT || 4000;
let atlasString = require('./atlas.json');

let Mates = require('./mates.model');
let Meetup = require('./meetup.model');

app.use(cors());
app.use(bodyParser.json());


mongoose.connect(atlasString.string, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
//get list of all users from the database and return them in a JSON formatted object
matesRoutes.get('/', function(req, res) {
    Mates.find(function(err, mates) {
        if (err) {
            console.log(err);
        } else {
            res.json(mates);
        }
    });
});

//get a specific user by their ID and return it as a JSON formatted object
matesRoutes.get('/:id', function(req, res) {
    let id = req.params.id;
    Mates.findById(id, function(err, mate) {
        res.json(mate);
    });
});

matesRoutes.get('/search/:searchterm', function (req, res) {
    let searchterm = req.params.searchterm
    Mates.find({ $text: { $search: searchterm } }, function (err, mates) {
        if (err)
            console.log(err);
        else if (!mates)
            res.status(404).send("data is not found");
        else
            res.json(mates);
    });
});

matesRoutes.post('/update/:id',function(req, res) {
    Mates.findById(req.params.id, function(err, mate) {
        if (!mate)
            res.status(404).send("data is not found");
        else
            mate.email = req.body.email;
            mate.name = req.body.name;
            mate.mobile = req.body.mobile;
            mate.password = req.body.password;
            mate.save().then(mate => {
                res.json('Mate updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

//post request to add a new user to the database
matesRoutes.post('/add', function(req, res) {
    let mate = new Mates(req.body);

    mate.save()
        .then(mate => {
            res.status(200).json({'mate': 'mate added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new mate failed');
        });
});

meetupRoutes.get('/:email', function (req, res) {
    let email = req.params.email;
    Meetup.find({ "invitee": email }, function (err, meetup) {
        res.json(meetup)
    })
})

meetupRoutes.get('/', function (req, res) {
    Meetup.find( function (err, meetup) {
        if (err) {
            console.log(err);
        } else {
            res.json(meetup);
        }
    })
})

meetupRoutes.get('/pending/:email', function (req, res) {
    let email = req.params.email;
    //essentially a database join happening in the code below this. Hang in there.
    Meetup.aggregate([
      //match invites based on the below criteria
      { $match: {
        //use the invitee email address for the initial match (we want the current users invites)
          invitee:email,
          //only unconfirmed invites will be treated as pending (as they should be)
          confirmed: false
        }
      },
      //lookup the 'mates' table and join them based on the inviters email address (we want the details of the inviter)
      {
        $lookup:
        {
            from: "mates",
            localField: "inviter",
            foreignField: "email",
            //give it a nice name that we can easily access from the JSON within React
            as: "inviterDetails"
        },
      },
      {
        //we want to include all fields except the password - this would be BAD!
        $project:
        {
          //exclude the INVITERS password from the request. Passwords are currently stored in Plaintext, which is super bad
          //0 = false (exclude) 1 = true (include). The below will display all fields except the password
          "inviterDetails.password":0,
        }
      }

  ], function (err, mates){
    res.json(mates);
  });





})

meetupRoutes.post('/add', function (req, res) {
    let meetup = new Meetup(req.body);
    meetup.save()
        .then(meetup => {
            res.status(200).json({ 'meetup': 'meetup added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new meetup failed');
        });
});

meetupRoutes.get('/accept/:inviter/:invitee', function (req, res) {
    Meetup.findOne({ "inviter": req.params.inviter, "invitee": req.params.invitee }, function (err, meetup) {
        if (!meetup)
            res.status(404).send("data is not found");
        else
            meetup.confirmed = true
        meetup.save().then(meetup => {
            res.json('Meetup accepted!');
        })
        .catch(err => {
            res.status(400).send("Update not possible");
        });
    })
})

meetupRoutes.get('/reject/:inviter/:invitee', function (req, res) {
    Meetup.findOneAndDelete({ "inviter": req.params.inviter, "invitee": req.params.invitee }, function (err, meetup) {
        if (err)
            console.log(err)
        else
            res.json('Meetup rejected');
    });
});

matesRoutes.post('/login',async(req, res) => {
  await Mates.find({email:req.body.u_email, password:req.body.u_pwd},(err,mate)=>{
       if(mate.length === 1) {
            res.send({login:'success'});
       } else {
           res.send({login:'fail'});
       }
  });
});


app.use('/meet_mates', matesRoutes);
app.use('/meetup_invites', meetupRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
