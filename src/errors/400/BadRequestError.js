const { HttpError } = require('../HttpError');

class BadRequestError extends HttpError {
    constructor(message = 'Bad Request'){
        super(500, message);
    }
}

module.exports.BadRequestError = BadRequestError;