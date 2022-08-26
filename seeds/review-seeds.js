const sequelize = require('../config/connection');
const { Review } = require('../models');

const reviewdata = [
    {
        review_title: 'faketitle1',
        review_comment: 'fakeComment1',
        rating: '1',
        user_id: 1,
        dining_id: 1
    },
    {
        review_title: 'faketitle2',
        review_comment: 'fakeComment2',
        rating: '2',
        user_id: 2,
        dining_id: 2
    },
    {
        review_title: 'faketitle3',
        review_comment: 'fakeComment3',
        rating: '3',
        user_id: 3,
        dining_id: 3
    },
    {
        review_title: 'faketitle4',
        review_comment: 'fakeComment4',
        rating: '4',
        user_id: 4,
        dining_id: 4
    },
    {
        review_title: 'faketitle5',
        review_comment: 'fakeComment5',
        rating: '5',
        user_id: 5,
        dining_id: 5
    }
];

const seedReviews = () => Review.bulkCreate(reviewdata, {individualHooks: true});

module.exports = seedReviews;