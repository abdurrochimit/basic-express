const { HttpError } = require('../HttpError');

class BadGatewayError extends HttpError {
    constructor(message = 'Bad Gateway'){
        super(502, message);
    }
}

module.exports.BadGatewayError = BadGatewayError;