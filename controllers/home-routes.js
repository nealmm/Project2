const router           = require('express').Router();
const { User, Review } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn,
        purpose: [
            {
                h2: 'Dine',
                p: 'Dine at local Washington DC restaurants'
            },
            {
                h2: 'Review',
                p: 'Post your reviews on this secure forum for members to see'
            },
            {
                h2: 'Share',
                p: 'Communicate with other community members and share recommendations'
            },
            {
                h2: 'Explore',
                p: 'Discover new favorite restaurants'
            }
        ],
        
        bio: [
            {
                name: 'Michael Park',
                fORb: 'Back End Development',
                icon: '/assets/images/tjp4ca.png'
            },
            {
                name: 'Matt Neal',
                fORb: 'Back End Development',
                icon: '/assets/images/nealmm.png'
            },
            {
                name: 'Franco Melendez',
                fORb: 'Front End Development',
                icon: '/assets/images/alenco98.png'
            },
            {
                name: 'Graham Smith',
                fORb: 'Front End Development',
                icon: '/assets/images/gsmith560.png'
            }
        ]
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login', { layout: 'secondary' });
});

router.get('/reviews/:placeName/:placeId', (req, res) => {
    Review.findAll({
        where: {
            place_id: decodeURIComponent(req.params.placeId)
        },
        order: [
            ['created_at', 'DESC']
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    }).then(data => {
        const reviews = data.map(x => x.get({ plain: true }));

        res.render('reviews', {
            reviews: reviews,
            placeName: decodeURIComponent(req.params.placeName),
            loggedIn: req.session.loggedIn
        });
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;