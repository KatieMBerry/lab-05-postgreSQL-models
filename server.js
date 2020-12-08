require('dotenv').config();
const app = require('./lib/app');


app.listen(3000, () => {
    console.log('start on 3000')
});