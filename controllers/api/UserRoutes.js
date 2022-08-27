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
    try {
        const data = await models.User.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
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