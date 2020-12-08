const pool = require('../utils/pool');

module.exports = class Beach {
    id;
    name;
    shore;
    parking;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.shore = row.shore;
        this.parking = row.parking;
    }

    //creates a new dog in dogs DB
    static async insert({ name, shore, parking }) {
        const { rows } = await pool.query(
            'INSERT INTO beaches (name, shore, parking) VALUES ($1, $2, $3) RETURNING *',
            [name, shore, parking]
        );
        return new Beach(rows[0]);
    }
}