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
    }
];

const seedDinings = () => Dining.bulkCreate(diningdata);

module.exports = seedDinings;