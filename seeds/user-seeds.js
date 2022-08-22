const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: 'fakeUser1',
        email: 'fakeEmail1@gmail.com',
        password: 'fakepass1'
    }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;