const router = require('express').Router();
const models = require('../../models');

router.get('/', async (req, res) => {
    try {
        const data = await models.User.findAll({
            attributes: { exclude: ['password'] }
        });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await models.User.findByPk(req.params.id);

        if (!data) {
            res.status(404).json({ message: 'Could not find user with that id' });
            return;
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/:username', async (req, res) => {
//     try {
//         const data = await models.User.findByPk(req.params.username);

//         if (!data) {
//             res.status(404).json({ message: 'Could not find user with that username' });
//             return;
//         }

//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// add login/singup code here or create loginRoute??
router.post('/', async (req, res) => {
    console.log('hello world')
    models.User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
        .then(dbUserData => {
          req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
      
            res.json(dbUserData);
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    models.User.findOne({
        where: {
            username: req.body.username
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that username!' });
            return;
        }
  
        const validPassword = dbUserData.checkPassword(req.body.password);
  
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
  
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
    
            res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
});

router.put('/:id', async (req, res) => {
    try {
        const data = await models.User.update(req.body, { where: { id: req.params.id } });

        if (!data) {
            res.status(404).json({ message: 'Could not find user with that id' });
            return;
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const data = await models.User.destroy({ where: { id: req.params.id } });

        if (!data) {
            res.status(404).json({ message: 'Could not find user with that id' });
            return;
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;