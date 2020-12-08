const pool = require('../utils/pool');

module.exports = class Trail {
    id;
    mountain;
    terrain;
    skill_level;

    constructor(row) {
        this.id = row.id;
        this.mountain = row.mountain;
        this.terrain = row.terrain;
        this.skill_level = row.skill_level;
    }

    //creates a new trail in trails DB
    static async insert({ mountain, terrain, skill_level }) {
        const { rows } = await pool.query(
            `INSERT INTO trails (mountain, terrain, skill_level) 
            VALUES ($1, $2, $3) 
            RETURNING *
            `,
            [mountain, terrain, skill_level]
        );
        return new Trail(rows[0]);
    }

    //finds all trails in trails DB
    static async find() {
        const { rows } = await pool.query(
            `SELECT * FROM trails
            `);

        return rows.map(row => new Trail(row));
    }

    //finds specific trail by id in trails DB
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

    //updates specific trail by id in trails DB
    static async update(id, { mountain, terrain, skill_level }) {
        const { rows } = await pool.query(
            `UPDATE trails
            SET mountain=$1,
                terrain=$2,
                skill_level=$3
            WHERE id=$4
            RETURNING *
            `,
            [mountain, terrain, skill_level, id]
        );
        return new Trail(rows[0]);
    }

    //deletes specific trail by id in trails DB
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