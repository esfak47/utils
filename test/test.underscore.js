(function () {
  if (typeof window === 'undefined') {
    return;
  }


  var max = u.max;
  var chai = this.chai;
  var should = chai.should();
  var expect = this.expect;
  describe('underscore', function () {
    describe('#max', function () {
      it('should return 4', function () {
        // console.log(max);
          max([1,2,3,4]).should.equal(4);
      });
    });
    describe('#min',function () {
      it('should return 1',function () {
        u.min([1,2,3,4]).should.equal(1);
      })
    })
  });
})();

