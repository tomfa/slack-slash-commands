import { Router } from 'express';
import weather from './weather';
import transport from './transport';

export default function() {
    let api = Router();

    api.use('/weather', weather);
    api.use('/transport', transport);

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        res.json({
            version : '1.0'
        });
    });

    return api;
}
