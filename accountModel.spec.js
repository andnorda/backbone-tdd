var Account = require('./accountModel.js');

describe('Account', function() {
    it('name is not valid when empty', function() {
        var account = new Account();
        expect(account.validate()).toEqual({name: 'name, plz'});
    });
    it('name is valid when fanto', function() {
        var account = new Account();
        account.set('name', 'fanto');
        expect(account.validate()).toBeUndefined();
    });
});
