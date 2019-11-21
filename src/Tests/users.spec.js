const request = require('supertest');
const server = require('../API/server');
const Users = require('../Data/models/users');
const db = require('../Data/dbConfig');

describe('Users functionality tests', () => {

    // * USER DATA FOR TESTS
    const newUser1 = {
        "username": "test1",
        "password": "test"
    }

    const newUser2 = {
        username: "test2",
        password: "test"
    }

    describe('Should be able to do helper methods for Users test DB', () => {

        // * RESEST USERS BEFORE TESTING AGAIN.
        beforeAll(async () => {
            await db('users').truncate();
        })

        // * TEST IF CAN CREATE 2 USERS
        // ? IF STATUS IS 201

        test('Able to add a new user', async () => {
            await request(server).post('/auth/register')
                .send(newUser1)
                .then(async result => {
                    expect(result.status).toBe(201)
                })
        })

        // ? IF RESULT IS OBJECT (JSON OBJ DATA)
        test('Able to add a second user and expect object', async () => {
            await request(server).post('/auth/register')
                .send(newUser2)
                .then(result => expect(typeof result).toBe('object'))
        })

        // ? IF ABLE TO RETRIEVE LIST OF USERS
        test('Return all users', async () => {
            const getAll = await Users.getAll();
            expect(typeof getAll).toBe('object');
            expect(getAll).toHaveLength(2);
        })

        // ? IF ABLE TO FIND BY ID TEST USER 1
        test('Able to find test user 1', async () => {
            const findById = await Users.findById(1);

            // * TEST CASES
            expect(typeof findById).toBe('object');
            expect(findById.id).toBe(1);
            expect(findById.username).toBe('test1');
            expect(findById.admin).toBe(false);
        })

        test('Able to find user by username', async () => {
            const findByUsername = await Users.findBy({ username: "test1" });

            // * TEST CASES
            expect(typeof findByUsername).toBe('object');
            expect(findByUsername.id).toBe(1);
            expect(findByUsername.username).toBe('test1');
            expect(findByUsername.admin).toBe(false);
        })
    })
})