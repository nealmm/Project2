const seedUsers = require('./user-seeds');
const seedDinings = require('./dining-seeds');
const seedReviews = require('./review-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force:true });
    console.log('--- DATABASE SYNCED ---');

    await seedUsers();
    console.log('--- USERS SEEDED ---');

    await seedDinings();
    console.log('--- DININGS SEEDED ---')

    await seedReviews();
    console.log('--- REVIEWS SEEDED ---')

    process.exit(0);
};

seedAll();