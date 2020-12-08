const pool = require('../utils/pool');

module.exports = class Coffee {
    id;
    name;
    roast;
    price;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.roast = row.roast;
        this.price = row.price;
    }

    //creates a new coffee in coffees DB
    static async insert({ name, roast, price }) {
        const { rows } = await pool.query(
            'INSERT INTO coffees (name, roast, price) VALUES ($1, $2, $3) RETURNING *',
            [name, roast, price]
        );
        return new Coffee(rows[0]);
    }
}