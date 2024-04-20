const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Create an Item
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        description: req.body.description
    });

    newItem.save()
        .then(item => res.json(item))
        .catch(err => res.status(400).json({ error: 'Unable to add this item' }));
});

// Read all Items
router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(404).json({ error: 'No items found' }));
});

// Update an Item
router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(item => res.json(item))
        .catch(err => res.status(400).json({ error: 'Unable to update the item' }));
});

// Delete an Item
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ error: 'No item found' }));
});

module.exports = router;
