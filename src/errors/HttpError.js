class HttpError extends Error {
    constructor(statusCode, message = 'Internal Server Error') {
        super(message);
        this.statusCode = statusCode;
        this.isSuccess = false;
        this.isError = true;
        this.errorMessage = message;
        this.data = null;
    }
}

module.exports.HttpError = HttpError;