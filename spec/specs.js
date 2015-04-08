describe('coinCombo', function() {
    it('takes 1 and returns, 1 Penny.', function() {
        expect(coinCombo(1)).to.equal("1 Penny");
    });

    it('takes 2 and returns, 2 Penny.', function() {
        expect(coinCombo(2)).to.equal("2 Penny");
    });
});
