(function () {
  if (typeof window === 'undefined') {
    return;
  }


  var toNumber = u.toNumber;
  var chai = this.chai;
  var should = chai.should();
  var expect = this.expect;
  describe('toNumber', function () {
    describe('#indexOf()', function () {
      it('should return 4', function () {
        toNumber(4).should.equal(4)
      });
    });
  });
})();

