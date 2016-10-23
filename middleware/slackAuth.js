const VALID_TOKENS = process.env.SLACK_API_KEY.split(';');

export const slackAuth = (req, res, next) => {
    let requestToken;
    switch (req.method){
        case 'GET':
            requestToken = req.query.token;
            break;
        case 'POST':
            requestToken = req.body.token;
            break;
    }

    if (!requestToken) {
        return res.status(400).send('Missing token in request');
    }
    if (!VALID_TOKENS.includes(requestToken)) {
        return res.status(401).send('Invalid token');
    }

    next();
}