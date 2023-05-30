const { HttpError } = require('../HttpError');

class MethodNotAllowedError extends HttpError {
    constructor(message = 'Method Not Allowed'){
        super(405, message);
    }
}

module.exports.MethodNotAllowedError = MethodNotAllowedError;