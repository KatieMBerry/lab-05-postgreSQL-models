const pool = require('../utils/pool');

module.exports = class Trail {
    id;
    name;
    mountain;
    terrain;
    skill_level;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.mountain = row.mountain;
        this.terrain = row.terrain;
        this.skill_level = row.skill_level;
    }

    //creates a new trail in trails DB
    static async insert({ mountain, terrain, skill_level }) {
        const { rows } = await pool.query(
            `INSERT INTO trails (name, mountain, terrain, skill_level) 
            VALUES ($1, $2, $3, $4) 
            RETURNING *
            `,
            [name, mountain, terrain, skill_level]
        );
        return new Trail(rows[0]);
    }

    static async find() {
        const { rows } = await pool.query(
            `SELECT * FROM trails
            `);

        return rows.map(row => new Trail(row));
    }

    static async findById(id) {
        const { rows } = await pool.query(
            `SELECT * FROM trails
            WHERE id=$1
            `,
            [id]
        );
        if (!rows[0]) throw new Error(`No trail with id ${id}`);
        return new Trail(rows[0]);
    }

    static async update(id, { name, mountain, terrain, skill_level }) {
        const { rows } = await pool.query(
            `UPDATE trails
            SET name=$1,
                mountain=$2,
                terrain=$3,
                skill_level=$4
            WHERE id=$5
            RETURNING *
            `,
            [name, mountain, terrain, skill_level]
        );
        return new Trail(rows[0]);
    }

    static async delete(id) {
        const { rows } = await pool.query(
            `DELETE FROM trails
             WHERE id=$1
             RETURNING *
             `,
            [id]
        );
        return new Trail(rows[0]);
    }
};