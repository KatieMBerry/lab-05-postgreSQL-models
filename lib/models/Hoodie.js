const pool = require('../utils/pool');

module.exports = class Hoodie {
    id;
    size;
    color;
    price;

    constructor(row) {
        this.id = row.id;
        this.size = row.size;
        this.color = row.color;
        this.price = row.price;
    }

    //creates a new hoodie in hoodies DB
    static async insert({ size, color, price }) {
        const { rows } = await pool.query(
            'INSERT INTO hoodies (size, color, price) VALUES ($1, $2, $3) RETURNING *',
            [size, color, price]
        );
        return new Hoodie(rows[0]);
    }
}