const firstMiddleware = (req, res, next) => {
    console.log('Info : I am come from middleware pertama');
    const bearerToken = req.headers['authorization'];

    if (!bearerToken) {
        return res.status(401).send({ message: 'Anda tidak diizinkan masuk !' })
    }

    const role = bearerToken.slice(7);

    if (role !== 'admin') {
        return res.status(401).send({ message: 'Anda tidak memiliki akses !' })
    }

    next();
}

module.exports = { firstMiddleware };