const { HttpError } = require('../HttpError');

class InternalServerError extends HttpError {
    constructor(message = 'Internal Server Error'){
        super(400, message);
    }
}

module.exports.InternalServerError = InternalServerError;