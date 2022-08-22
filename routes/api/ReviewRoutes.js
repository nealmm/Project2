const router = require('express').Router();
const models = require('../../models');

router.get('/', async (req, res) => {
    try {
        const data = await models.Review.findAll();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await models.Review.findByPk(req.params.id);

        if (!data) {
            res.status(404).json({ message: 'Could not find review with that id' });
            return;
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', (req, res) => {
    try {
        const data = await models.Review.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', (req, res) => {
    try {
        const data = await models.Review.update(req.body, { where: { id: req.params.id } });

        if (!data) {
            res.status(404).json({ message: 'Could not find review with that id' });
            return;
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', (req, res) => {
    try {
        const data = await models.Review.destory({ where: { id: req.params.id } });

        if (!data) {
            res.status(404).json({ message: 'Could not find review with that id' });
            return;
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;