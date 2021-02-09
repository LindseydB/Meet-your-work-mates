const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const matesRoutes = express.Router();
const PORT = 4000; //process.env.PORT || 
let atlasString = require('./atlas.json');

let Mates = require('./mates.model');

app.use(cors());
app.use(bodyParser.json());


mongoose.connect(atlasString.string, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

matesRoutes.get('/', function(req, res) {
    Mates.find(function(err, mates) {
        if (err) {
            console.log(err);
        } else {
            res.json(mates);
        }
    });
});

matesRoutes.get('/:id', function(req, res) {
    let id = req.params.id;
    Mates.findById(id, function(err, mate) {
        res.json(mate);
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