// Generic error handler middleware
module.exports = (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({error: 'An internal server error occurred'})
}
