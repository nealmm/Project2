const router = require('express').Router();
const Review = require('../../models/Review');
const User = require('../../models/User');

router.get('/', (req, res) => {
    Review.findAll({
        include: {
            model: User,
            attributes: ['username']
        }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Review.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: User,
            attributes: ['username']
        }
    }).then(data => {
        if (!data) {
            res.status(404).json({ message: 'Could not find review with this id' });
            return;
        }

        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

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

router.put('/:id', (req, res) => {
    Review.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        if (!data) {
            res.status(404).json({ message: 'Could not find review with this id' });
            return;
        }

        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Review.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        if (!data) {
            res.status(404).json({ message: 'Could not find review with this id' });
            return;
        }

        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;