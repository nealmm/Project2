const sequelize = require('../config/connection');
const { Dining } = require('../models');

const diningdata = [
    {
        name: 'fakeName1',
        category: 'fake1Category'
    },
    {
        name: 'fakeName2',
        category: 'fake2Category'
    },
    {
        name: 'fakeName3',
        category: 'fake3Category'
    },
    {
        name: 'fakeName4',
        category: 'fake4Category'
    },
    {
        name: 'fakeName5',
        category: 'fake5Category'
    }
];

const seedDinings = () => Dining.bulkCreate(diningdata, {individualHooks: true});

module.exports = seedDinings;