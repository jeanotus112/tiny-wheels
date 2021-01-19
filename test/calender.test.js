var assert = require('assert')
var Calendar = require('../src/Calendar')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Calendar', function() {
  var Calendar = new Calendar()
  describe('#getCurMonth', function(){
    it('curMonth is a number and between 0-11', ()=> {
      assert(Calendar.getCurMonth(), 'number')
    })
  })
})