import { Router } from 'express';

let router = Router();

router.get('/', function(req, res) {
    let response = {
        "text": "Next bus in 3 minutes",
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
        "text": "Fastest way to city center: bus in 3 minutes",
        "attachments": [
            {
                "text":"Dummy POST response. Btw, I told everyone"
            }
        ]
    };
});

module.exports = router;