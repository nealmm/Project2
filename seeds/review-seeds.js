const { Review } = require('../models');

const reviewdata = [
    {
        review_title: '',
        review_comment: '',
        rating: '1',
        comment: 'fakeComment',
        user_id: 1,
        dining_id: 1
    },
    {
        review_title: '',
        review_comment: '',
        rating: '2',
        comment: 'fakeComment',
        user_id: 2,
        dining_id: 2
    }
]

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;