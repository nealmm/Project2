const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {   
        username: 'Franco Melendez',
        email: 'franco@gmail.com',
        password: '123'
    },
    {
        username: 'Graham Smith',
        email: 'graham@gmail.com',
        password: '123'
    },
    {
        username: 'Matt Neal',
        email: 'matt@gmail.com',
        password: '123'
    },
    {
        username: 'Michael Park',
        email: 'michael@gmail.com',
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