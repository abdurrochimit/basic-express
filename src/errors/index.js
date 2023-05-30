
const { HttpError } = require('./HttpError');
// client error 400
const { BadRequestError } = require('./400/BadRequestError')
const { UnauthorizedError } = require('./400/UnauthorizedError');
const { ForbiddenError } = require('./400/ForbiddenError');
const { NotFoundError } = require('./400/NotFoundError');
const { MethodNotAllowedError } = require('./400/MethodNotAllowedError');
const { RequestTimeoutError } = require('./400/RequestTimeoutError');
const { TooManyRequestsError } = require('./400/TooManyRequestsError');
const { InternalServerError } = require('./500/InternalServerError');
const { BadGatewayError } = require('./500/BadGatewayError');

module.exports = {
    HttpError,
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    MethodNotAllowedError,
    RequestTimeoutError,
    TooManyRequestsError,
    InternalServerError,
    BadGatewayError,

}