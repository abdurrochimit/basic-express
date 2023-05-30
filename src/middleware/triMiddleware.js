const triMiddleware = (roleList) => {
    return (req, res, next) => {
        console.log('Info : I am come from middleware ketiga');
        const bearerToken = req.headers['authorization'];

        if (!bearerToken) {
            return res.status(401).send({ message: 'Anda tidak diizinkan masuk !' })
        }

        // slice(7) = menghilangkan karakter 7 digit dari kanan
        const roleFromToken = bearerToken.slice(7);

        if (roleList.indexOf(roleFromToken) === -1) {
            return res.status(401).send({ message: 'Anda tidak memiliki akses !' })
        }

        next();
    }
}

module.exports = { triMiddleware };