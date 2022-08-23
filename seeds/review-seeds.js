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
    }
]

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;