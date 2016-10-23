import { Router } from 'express';
import yr from './yr';
import ruter from './ruter';

export default function() {
    let api = Router();

    api.use('/weather', yr);
    api.use('/transport', ruter);

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        res.json({
            version : '1.0'
        });
    });

    return api;
}
