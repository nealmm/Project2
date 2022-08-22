const { Review } = require('../models');

const reviewdata = [
    {
        rating: '1',
        comment: 'fakeComment',
        user_id: 1,
        dining_id: 1
    }
]

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;