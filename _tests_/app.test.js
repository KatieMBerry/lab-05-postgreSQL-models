require('dotenv').config();
const request = require('supertest');
const app = require('../lib/app');
const fs = require('fs');



describe('app tests', () => {
    it('creates trail to the database via POST, and returns it', async () => {
        const response = await request(app)
            .post('/trails')
            .send({
                mountain: 'Rubicon',
                terrain: 'horse trail',
                skill_level: 2
            });

        expect(response.body).toEqual({
            id: '15',
            mountain: 'Rubicon',
            terrain: 'horse trail',
            skill_level: 2
        });
    });
});
    // const expectation = {
    //     mountain: "Rubicon",
    //     terrain: "horse trail",
    //     skill_level: 2
    // };

    // const data = await request(app)
    //     .post('./trails')
    //     .send(expectation)
    //     .expect('Content-Type', /json/)
    //     .expect(200);

    // const allTrails = await request(app)
    //     .get('/trails')
    //     .expect('Content-Type', /json/)
    //     .expect(200);

    // expect(data.body).toEqual(expectation);
    // expect(allTrails.body.length).toEqual(5);
// })

// describe('app get route', async () => {
//     it('returns all trails')

//     const expectation = [
//         {
//             "id": "1",
//             "mountain": "mt rose",
//             "terrain": "rough",
//             "skill_level": 3
//         },
//         {
//             "id": "3",
//             "mountain": "Mt. Rose",
//             "terrain": "dirt path",
//             "skill_level": 3
//         },
//         {
//             "id": "4",
//             "mountain": "Meeks Bay",
//             "terrain": "fire road",
//             "skill_level": 4
//         },
//         {
//             "id": "2",
//             "mountain": "Eagle Falls",
//             "terrain": "rocky",
//             "skill_level": 2
//         }
//     ];

//     const data = await request.app
//         .get('./trails')
//         .expect('Content-Type', /json/)
//         .expect(200);

//     expect(data.body).toEqual(expectation)
// })

// describe('app get route', async () => {
//     it('returns a single trail by id 1')

//     const expectation =
//     {
//         "id": "1",
//         "mountain": "mt rose",
//         "terrain": "rough",
//         "skill_level": 3
//     };

//     const data = await request.app
//         .get('./trails/1')
//         .expect('Content-Type', /json/)
//         .expect(200);

//     expect(data.body).toEqual(expectation)
// })

// describe('app put route', async () => {
//     it('updates a trail with id 1 and returns it')

//     const updatedTrail =
//     {
//         "id": "1",
//         "mountain": "mt rose",
//         "terrain": "rough",
//         "skill_level": 5
//     };

//     const data = await request.app
//         .put('./trails/1')
//         .send(updatedTrail)
//         .expect('Content-Type', /json/)
//         .expect(200);

//     expect(data.body).toEqual(updatedTrail)
// })

// describe('app delete route', async () => {
//     it('deletes a trail with id 1 from the database and returns the deleted item')

//     const expectation =
//     {
//         "id": "1",
//         "mountain": "mt rose",
//         "terrain": "rough",
//         "skill_level": 5
//     };

//     const deletedTrail = await request.app
//         .delete('./trails/1')
//         .expect('Content-Type', /json/)
//         .expect(200);

//     const allTrails = await request.app
//         .get('/trails')
//         .expect('Content-Type', /json/)
//         .expect(200);

//     expect(deletedTrail.body).toEqual(expectation);
//     expect(allTrails.body.length).toEqual(3)
// })