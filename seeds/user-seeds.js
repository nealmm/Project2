const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: 'fakeUser1',
        email: 'fakeEmail1@gmail.com',
        password: 'fakepass1'
    },
    {
        username: 'fakeUser2',
        email: 'fakeEmail2@gmail.com',
        password: 'fakepass2'
    },
    {
        username: 'fakeUser3',
        email: 'fakeEmail3@gmail.com',
        password: 'fakepass3'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;