const { firstMiddleware } = require('./firstMiddleware');
const { secondMiddleware } = require('./secondMiddleware');
const { triMiddleware } = require('./triMiddleware');
const { httpRequestLogger } = require('./httpRequestLogger');

module.exports = { firstMiddleware, secondMiddleware, triMiddleware, httpRequestLogger };