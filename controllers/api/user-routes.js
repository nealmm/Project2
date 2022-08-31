const router = require('express').Router();
const User   = require('../../models/User');

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] }
    }).then(data => {
        if (!data) {
            res.status(404).json({ message: 'Could not find user with this id' });
            return;
        }

        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then(data => {
        req.session.save(() => {
            req.session.user_id = data.id;
            req.session.username = data.username;
            req.session.loggedIn = true;

            res.json(data);
        });
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(data => {
        if (!data) {
            res.status(400).json({ message: 'Could not find user with this email address' });
            return;
        }

        const validPassword = data.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Could not validate password' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = data.id;
            req.session.username = data.username;
            req.session.loggedIn = true;

            res.json({ message: 'Successfully logged in' });
        });
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.put('/:id', (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.id
        },
        individualHooks: true
    }).then(data => {
        if (!data) {
            res.status(404).json({ message: 'Could not find user with this id' });
            return;
        }

        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        if (!data) {
            res.status(404).json({ message: 'Could not find user with this id' });
            return;
        }

        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;