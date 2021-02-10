const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const matesRoutes = express.Router();
const PORT = process.env.PORT || 4000;
let atlasString = require('./atlas.json');

let Mates = require('./mates.model');

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

//post request to udpate user based on their ID
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

//basic search endpoint for finding users based on their name
matesRoutes.get('/search/:query', function(req, res) {
    //assign the query parameters (searched keywords) to a variable
    let query = req.params.query;
    //simple text search - words separated by spaces are treated as individual keywords - probably not the best behaviour for searching, but works
    Mates.find({$text: {$search: query}})
      .then(result => {
        //JSONify the search results for React to handle
        res.status(200).json(result)
      })
      .catch(err => {
        //return error information for handling or displaying within React client
        res.status(500).json({
            error: err
     });
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

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
