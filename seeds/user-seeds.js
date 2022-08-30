const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {   
        username: 'franco',
        email: 'franco@gmail.com',
        password: '123'
    },
    {
        username: 'graham',
        email: 'graham@gmail.com',
        password: '123'
    },
    {
        username: 'matt',
        email: 'matt@gmail.com',
        password: '123'
    },
    {
        username: 'michael',
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