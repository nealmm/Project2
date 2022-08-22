const { Dining } = require('../models');

const diningdata = [
    {
        name: 'fakeName1',
        category: 'fakeCategory'
    }
];

const seedDinings = () => Dining.bulkCreate(diningdata);

module.exports = seedDinings;