const { HttpError } = require('../HttpError');

class RequestTimeoutError extends HttpError {
    constructor(message = 'Request Time Out'){
        super(408, message);
    }
}

module.exports.RequestTimeoutError = RequestTimeoutError;