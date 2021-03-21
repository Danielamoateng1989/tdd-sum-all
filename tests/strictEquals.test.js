var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect
var strictEquals = require('../strictEquals')


describe('strictEquals', () => {

  it('returns a value of true, if numbers are strictly equal to one another', () => {
    var a = 5
    var b = 5

    let result = strictEquals(a, b)
    expect(result).to.equal(true)

  })


  it('returns a value of false, if numbers are not strictly equal to one another', () => {
    var a = 5
    var b = 4

    let result = strictEquals(a, b)
    expect(result).to.equal(false)

  })
  it('returns a value of false, if numbers are not strictly equal to one another', () => {
    var a = '5'
    var b = 5

    let result = strictEquals(a, b)
    expect(result).to.equal(false)

  })
  it('returns a value of false, if numbers are not strictly equal to one another', () => {
    var a = ''
    var b = 5

    let result = strictEquals(a, b)
    expect(result).to.equal(false)

  })
  
  it('returns a value of true, if numbers are not strictly equal to one another', () => {
    var a = 5
    var b = 0

    let result = strictEquals(a, b)
    expect(result).to.equal(false)

  })

})