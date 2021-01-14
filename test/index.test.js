/* test/index.test.js */
/* globals describe, it */

const expect = require('chai').expect

describe('Wayment', function () {
  const A = require('../index')

  describe('#wayment', function () {
    it('should call `then` after at least 5ms', async function () {
      const began = Date.now()

      await A.wayment(5 * 1.1)
      expect(Date.now() - began).to.be.at.least(5)
    })

    it('should call `then` after at least 10ms', async function () {
      const began = Date.now()

      await A.wayment(10 * 1.1)
      expect(Date.now() - began).to.be.at.least(10)
    })

    it('should call `then` after at least 20ms', async function () {
      const began = Date.now()

      await A.wayment(20 * 1.1)
      expect(Date.now() - began).to.be.at.least(20)
    })

    it('should call `then` after at least 1s', async function () {
      const began = Date.now()

      this.slow(2200)
      this.timeout(2200)
      await A.wayment()
      expect(Date.now() - began).to.be.at.least(1000)
    })
  })
})
