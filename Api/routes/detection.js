//importing all dependencies
const express = require('express');
const axios = require('axios');
const fs = require('fs');

//constant containing the URL of the hosted ML Model
const urlOfModel = 'http://model.yasharyan.xyz/predict';

const router = express.Router();

/* GET users listing. */
router.post('/', async (req, res) => {
    try {
        // recieve boolean output from the machine learning model for the validity of the news
        const fakeOrNot = await axios.post(urlOfModel, {
            text: req.body.text.trim()
        });
        //set the response values as per the response recieved
        res.status(200).json(fakeOrNot.data);
    } catch (err) {
        //send a server error if the something went wrong
        res.status(500).json({ msg: 'Server Error', error: err });
    }
});

//route to get user submissions for fake news
router.post('/contribute', async (req, res) => {
    try {
        const date = new Date();
        console.log(req.body);
        const submission = req.body.submission.trim();
        //saving the user submissions in a JSON file
        fs.readFile('submissions.json', 'utf-8', (err, data) => {
            if (err) throw err;
            const objectArray = JSON.parse(data);
            objectArray.submissions.push({
                date: date,
                ip: req.ip,
                submission: submission
            });
            fs.writeFile(
                'submissions.json',
                JSON.stringify(objectArray),
                'utf-8',
                (err) => {
                    if (err) throw err;
                }
            );
        });
        res.status(200).json({ msg: 'Submitted' });
    } catch (err) {
        //send a server error if the something went wrong
        res.status(500).json({ msg: 'Server Error', error: err });
    }
});

module.exports = router;
