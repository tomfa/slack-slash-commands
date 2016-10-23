import { Router } from 'express';

let router = Router();

router.get('/', function(req, res) {
    res.send('Dummy weather GET response');
});

router.post('/', function(req, res) {
    res.send('Dummy weather POST response');
});

module.exports = router;