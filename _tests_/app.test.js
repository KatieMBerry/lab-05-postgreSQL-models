require('dotenv').config();
const request = require('supertest');
const app = require('../lib/app');
const Trail = require('../lib/models/Trail');
const pool = require('../lib/utils/pool');
const fs = require('fs');



describe('app tests', () => {
    beforeEach(() => {
        return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
    });

    afterAll(() => {
        return pool.end();
    });

    it('creates a trail to the database via POST, and returns it', async () => {
        const response = await request(app)
            .post('/trails')
            .send({
                mountain: 'Rubicon',
                terrain: 'horse trail',
                skill_level: 2
            });

        expect(response.body).toEqual({
            id: '1',
            mountain: 'Rubicon',
            terrain: 'horse trail',
            skill_level: 2
        });
    });

    it('retrieves all trails from database via GET', async () => {
        const trail = await Trail.insert({ mountain: 'Northstar', terrain: 'bike trail', skill_level: 1 });
        const trail2 = await Trail.insert({ mountain: 'Northstar', terrain: 'bike trail', skill_level: 1 });

        const response = await request(app)
            .get('/trails')

        expect(response.body).toEqual([trail, trail2]);
    });

    it('retrieves a single trail by ID from database via GET', async () => {
        const trail = await Trail.insert({ mountain: 'Northstar', terrain: 'bike trail', skill_level: 1 });

        const response = await request(app)
            .get(`/trails/${1}`)

        expect(response.body).toEqual(trail);
    });

    it('updates a single trail by ID from database via PUT, and returns it', async () => {
        const trail = await Trail.insert({ mountain: 'Northstar', terrain: 'bike trail', skill_level: 1 });

        const response = await request(app)
            .put(`/trails/${trail.id}`)
            .send({
                mountain: 'Northstar',
                terrain: 'horse trail',
                skill_level: 1
            })

        expect(response.body).toEqual({
            ...trail,
            terrain: 'horse trail'
        });
    });

    it('deletes a single trail by ID from database via DELETE, and returns it', async () => {
        const trail = await Trail.insert({ mountain: 'Northstar', terrain: 'bike trail', skill_level: 1 });

        const response = await request(app)
            .delete(`/trails/${trail.id}`)
            .send({
                mountain: 'Northstar',
                terrain: 'horse trail',
                skill_level: 1
            })

        expect(response.body).toEqual({});
    });
});