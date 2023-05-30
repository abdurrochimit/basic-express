const { HttpError } = require('../HttpError');

class TooManyRequestsError extends HttpError {
    constructor(message = 'Too Many Error'){
        super(429, message);
    }
}

module.exports.TooManyRequestsError = TooManyRequestsError;