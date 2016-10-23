const VALID_TOKENS = process.env.SLACK_API_KEY.split(';');

export const slackAuth = (req, res, next) => {
    if (!VALID_TOKENS) {
        return next();
    }
    let requestToken;
    switch (req.method){
        case 'GET':
            requestToken = req.query.token;
            break;
        case 'POST':
            requestToken = req.body.token;
            break;
        default:
            return res.status(405).send('Method not allowed');
    }
    if (!requestToken) {
        return res.status(400).send('Missing token in request');
    }
    if (!VALID_TOKENS.includes(requestToken)) {
        return res.status(401).send('Invalid token');
    }

    next();
}

export const sslCheckResponse = (req, res, next) => {
    if (req.query && req.query.ssl_check && req.query.ssl_check == 1) {
        return res.status(200).send();
    }
    next();
}