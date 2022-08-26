const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {   
        username: 'fakeUser1',
        email: 'fakeEmail1@gmail.com',
        password: '123'
    },
    {
        username: 'fakeUser2',
        email: 'fakeEmail2@gmail.com',
        password: '123'
    },
    {
        username: 'fakeUser3',
        email: 'fakeEmail3@gmail.com',
        password: '123'
    },
    {
        username: 'fakeUser4',
        email: 'fakeEmail4@gmail.com',
        password: '123'
    },
    {
        username: 'fakeUser5',
        email: 'fakeEmail5@gmail.com',
        password: '123'
    }
    
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;