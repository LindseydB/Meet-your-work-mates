const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const matesRoutes = express.Router();
const PORT = 4000;
let atlasString = require('./atlas.json');

let Mates = require('./mates.model');

app.use(cors());
app.use(bodyParser.json());


mongoose.connect(atlasString.string, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

matesRoutes.route('/').get(function(req, res) {
    Mates.find(function(err, mates) {
        if (err) {
            console.log(err);
        } else {
            res.json(mates);
        }
    });
});

matesRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Mates.findById(id, function(err, mate) {
        res.json(mate);
    });
});

matesRoutes.route('/update/:id').post(function(req, res) {
    Mates.findById(req.params.id, function(err, mate) {
        if (!mate)
            res.status(404).send("data is not found");
        else
            mate.email = req.body.email;
            mate.name = req.body.name;
            mate.mobile = req.body.mobile;
            mate.job = req.body.job;
            mate.interests = req.body.interests;

            mate.save().then(mate => {
                res.json('Mate updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

matesRoutes.route('/add').post(function(req, res) {
    let mate = new Mates(req.body);
    mate.save()
        .then(mate => {
            res.status(200).json({'mate': 'mate added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new mate failed');
        });
});

app.use('/meet_mates', matesRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});