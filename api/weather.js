import { Router } from 'express';

let router = Router();

router.get('/', function(req, res) {
    let response = {
        "text": "Now: 34 degrees and raining",
        "attachments": [
            {
                "text":"Dummy GET response. Only you can see this"
            }
        ]
    };
    res.send(response);
});

router.post('/', function(req, res) {
    let response = {
        "response_type": "in_channel",
        "text": "Now: 34 degrees and raining",
        "attachments": [
            {
                "text":"Dummy POST response. Everyone can see me now! :wave:"
            }
        ]
    };
    res.send(response);
});


module.exports = router;