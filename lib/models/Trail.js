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

    //creates a new trail in DB
    static async insert({ mountain, terrain, skill_level }) {
        const { rows } = await pool.query(
            'INSERT INTO trails (mountain, terrain, skill_level) VALUES ($1, $2, $3) RETURNING *',
            [mountain, terrain, skill_level]
        );
        return new Trail(rows[0]);
    }
}