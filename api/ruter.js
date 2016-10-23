import { Router } from 'express';

let router = Router();

router.get('/', function(req, res) {
    res.send('Dummy transport GET response');
});

router.post('/', function(req, res) {
    res.send('Dummy transport POST response');
});

module.exports = router;