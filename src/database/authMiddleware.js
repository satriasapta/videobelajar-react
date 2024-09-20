import jwt from 'jsonwebtoken';

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).send({ error: 'Token not provided' });
    }


    // eslint-disable-next-line no-undef
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).send({ error: 'Invalid or expired token' });
        }
        req.user = user;
        next();
    });
}

export { verifyToken };
