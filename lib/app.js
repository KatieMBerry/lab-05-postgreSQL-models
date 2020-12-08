require('dotenv').config();
const express = require('express');
const app = express();
const Trail = require('./models/Trail');

app.use(express.json());

//CRUD Routes
app.post('/trails', (req, res, next) => {
    Trail
        .insert(req.body)
        .then(trail => res.send(trail))
        .catch(next);
    // .then(console.log);
});

app.get('/trails', (req, res, next) => {
    Trail
        .find()
        .then(trail => res.send(trail))
        .catch(next);
});

app.get('/trails/:id', (req, res, next) => {
    const trailId = req.params.id;
    Trail
        .findById(trailId)
        .then(trail => res.send(trail))
        .catch(next);
});

app.put('/trails/:id', (req, res, next) => {
    const trailId = req.params.id;
    Trail
        .update(trailId, req.body)//how we want to update on body
        .then(trail => res.send(trail))
        .catch(next);
});

app.delete('/trails/:id', (req, res, next) => {
    const trailId = req.params.id;
    Trail
        .delete(trailId)
        .then(trail => res.send(trail))
        .catch(next);
});


module.exports = app;