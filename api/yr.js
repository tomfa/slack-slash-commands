import { Router } from 'express';

let router = Router();

router.get('/', function(req, res) {
    console.log(req.query);
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
    console.log(req.body);
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


/*
lh7kGlb0rR4xfS6m7JzjwAHW

token=gIkuvaNzQIHg97ATvDxqgjtO
team_id=T0001
team_domain=example
channel_id=C2147483705
channel_name=test
user_id=U2147483697
user_name=Steve
command=/weather
text=94070
response_url=https://hooks.slack.com/commands/1234/5678
*/

module.exports = router;