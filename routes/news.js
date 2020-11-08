//importing all dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');


const router = express.Router();

//all available categories added here
const categories = ['sports', 'politics', 'world', 'technology'];

/* GET home page. */
router.get('/', async (req, res) => {
    //send a list of recent trending fake news from the database
});

router.get('/category/:category', async (req, res) => {
    //send the top fake news from the database based on the query string
    try {
        const categoryAvailable = categories.includes(
            req.params.category.toLowerCase().trim()
        );
        if (categoryAvailable) {
            // getting dynamic fileName
            const fileName = path.join(
                __dirname,
                '..',
                'categories',
                `${req.params.category.toLowerCase().trim()}.json`
            );
            fs.readFile(fileName, 'utf-8', (err, data) => {
                res.status(200).json(JSON.parse(data));
            });
        } else {
            res.status(404).json({ msg: 'Resource not found' });
        }
    } catch (err) {
        res.status(500).json({ msg: 'Server Error', error: err });
    }
});

module.exports = router;
