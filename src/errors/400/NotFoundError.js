const { HttpError } = require('../HttpError');

class NotFoundError extends HttpError {
    constructor(message = 'Not Found'){
        super(404, message);
    }
}

module.exports.NotFoundError = NotFoundError;