if (process.env.NODE_ENV === 'production') {
  console.log('NODE_ENV: ' + process.env.NODE_ENV);
  module.exports = require('./configureStore.prod')
} else {
  console.log('NODE_ENV: ' + process.env.NODE_ENV);
  module.exports = require('./configureStore.dev')
}
