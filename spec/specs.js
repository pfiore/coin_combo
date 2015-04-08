describe('coinCombo', function() {
    it('takes 1 and returns, 1 Penny.', function() {
        expect(coinCombo(1)).to.deep.equal([1, 0, 0, 0]);
    });

    it('takes 2 and returns, 2 Penny.', function() {
        expect(coinCombo(2)).to.deep.equal([2, 0, 0, 0]);
    });

    it('takes 5 and returns, 1 Nickle.', function() {
        expect(coinCombo(5)).to.deep.equal([0, 1, 0, 0]);
    });

    it('takes 6 and returns, 1 Penny, 1 Nickle.', function() {
        expect(coinCombo(6)).to.deep.equal([1, 1, 0, 0]);
    });

    it('takes 10 and returns, 1 Dime.', function() {
        expect(coinCombo(10)).to.deep.equal([0, 0, 1, 0]);
    });

    it('takes 11 and returns, 1 Dime, 1 Penny.', function() {
        expect(coinCombo(11)).to.deep.equal([1, 0, 1, 0]);
    });

    it('takes 15 and returns, 1 Dime, 1 Nickle.', function() {
        expect(coinCombo(15)).to.deep.equal([0, 1, 1, 0]);
    });

    it('takes 17 and returns, 1 Dime, 1 Nickle, 2 Penny.', function() {
        expect(coinCombo(17)).to.deep.equal([2, 1, 1, 0]);
    });

    it('takes 25 and returns, 1 Quarter.', function () {
        expect(coinCombo(25)).to.deep.equal([0, 0, 0, 1]);
    });

    it('takes 30 and returns, 1 Quarter, 1 Nickel.', function () {
        expect(coinCombo(30)).to.deep.equal([0, 1, 0, 1]);
    });

    it('takes 36 and returns, 1 Quarter, 1 Dime, 1 Penny.', function () {
        expect(coinCombo(36)).to.deep.equal([1, 0, 1, 1]);
    });

    it('takes 43 and returns, 1 Quarter, 1 Dime, 1 Nickle, 3 Pennies.', function () {
        expect(coinCombo(43)).to.deep.equal([3, 1, 1, 1]);
    });


});
