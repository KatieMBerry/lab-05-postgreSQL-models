const express = require('express');
const Trail = require('./lib/models/Trail');
const app = express();

app.post('/trails', (req, res) => {
    Trail
        .insert({ name: 'Chikadee Ridge', mountain: 'Mt. Rose', terrain: 'dirt path', skill_level: 3 })
        // .then(trail => res.send(trail));
        .then(console.log);
});

// app.get('/trails', (req, res) => {
//     Trail
//         .find()
//         .then()
// });

// app.put('/trails', (req, res) => {
//     Trail
//         .update()
//         .then()
// });

// app.delete('/trails', (req, res) => {
//     Trail
//         .delete(id)
// });

module.exports = app;

app.listen(3000, () => {
    console.log('start on 3000')
});