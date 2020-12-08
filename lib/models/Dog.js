const pool = require('../utils/pool');

module.exports = class Dog {
    id;
    name;
    breed;
    age;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.breed = row.breed;
        this.age = row.age;
    }

    //creates a new dog in dogs DB
    static async insert({ name, breed, age }) {
        const { rows } = await pool.query(
            'INSERT INTO dogs (name, breed, age) VALUES ($1, $2, $3) RETURNING *',
            [name, breed, age]
        );
        return new Dog(rows[0]);
    }
}