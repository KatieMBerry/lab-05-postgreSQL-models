const express = require('express');
const Trail = require('./lib/models/Trail');
const app = express();

app.use(express.json());


app.post('/trails', (req, res) => {
    Trail
        .insert(req.body)
        .then(trails => res.send(trails));
    // .then(console.log);
});

app.get('/trails', (req, res) => {
    Trail
        .find()
        .then(trails => res.send(trails))
});

app.get('/trails/:id', (req, res) => {
    const trailId = req.params.id;
    Trail
        .findById(trailId)
        .then(trails => res.send(trails))
});

app.put('/trails/:id', (req, res) => {
    const trailId = req.params.id;
    Trail
        .update(trailId, req.body)
        .then(trails => res.send(trails))
});

app.delete('/trails/:id', (req, res) => {
    const trailId = req.params.id;
    Trail
        .delete(trailId)
        .then(trails => res.send(trails))
});

module.exports = app;

app.listen(3001, () => {
    console.log('start on 3001')
});