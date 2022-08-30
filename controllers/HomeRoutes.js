const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Dining, Review } = require('../models');

// render homepage handlebar
router.get('/', (req, res) => {
    // res.send('hello world!')
    res.render('homepage', { 
        // title: 'Home Page'
    
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
        ],

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
        ]

    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {

        // redirect to review page****
        res.redirect('/');
        return;
    }

    res.render('login', { layout: 'secondary' });
});

// *** add other routes later

module.exports = router;