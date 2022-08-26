const router = require('express').Router();
const models = require('../../models');

router.get('/', async (req, res) => {
    try {
        const data = await models.Dining.findAll();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await models.Dining.findByPk(req.params.id);

        if (!data) {
            res.status(404).json({ message: 'Could not find dining with that id' });
            return;
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const data = await models.Dining.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const data = await models.Dining.update(req.body, { where: { id: req.params.id } });

        if (!data) {
            res.status(404).json({ message: 'Could not find dining with that id' });
            return;
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const data = await models.Dining.destroy({ where: { id: req.params.id } });

        if (!data) {
            res.status(404).json({ message: 'Could not find dining with that id' });
            return;
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;