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

    it('takes 10 and returns, 1 Dime', function() {
        expect(coinCombo(10)).to.deep.equal([0, 0, 1, 0]);
    });
});
