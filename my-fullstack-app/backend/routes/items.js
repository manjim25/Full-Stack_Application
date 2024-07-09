const express = require('express');
const Item = require('../models/Item');
const router = express.Router();

router.get('/home', async (req,res) => {
    console.log('home');
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err){
        res.status(500).json({message: err.message});
    }
});

router.post('/', async (req, res) => {
    const item = new Item({
        name: req.body.name,
        description: req.body.description,
    });

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (err){
        res.status(400).json({message: err.message});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (item) {
            item.name = req.body.name || item.name;
            item.description = req.body.description || item.description;
            item.completed = req.body.completed || item.completed;

            const updatedItem = await item.save();
            res.json(updatedItem);
        } else {
            res.status(404).json({message: err.message});
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

router.delete('/id:', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (item) {
            await item.removed();
            res.json({message: 'Item deleted'});
        } else {
            res.status(404).json({message: 'Item not found'});
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

module.exports = router;