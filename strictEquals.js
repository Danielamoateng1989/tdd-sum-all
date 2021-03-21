const strictEquals = (a, b) => {
  return a == b && typeof a === typeof b
}

module.exports = strictEquals