const router = require('express').Router();
const models = require('../../models');

router.get('/', async (req, res) => {
    try {
        const data = await models.User.findAll();
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
})

router.post('/', (req, res) => {
    try {
        const data = await models.User.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
    try {
        const data = await models.User.destory({ where: { id: req.params.id } });

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