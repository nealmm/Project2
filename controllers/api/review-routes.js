const router = require('express').Router();
const Review = require('../../models/Review');

router.post('/', (req, res) => {
    Review.create({
        user_id: req.session.user_id,
        place_id: req.body.placeId,
        rating: req.body.rating,
        title: req.body.title,
        body: req.body.bodyTxt
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;