var AccountView = require('./accountView');

describe('Account View', function() {
    it('has a name field', function() {
        var accountView = new AccountView();
        accountView.render();
        expect(accountView.$('#name').length).toEqual(1);
    });
    it('model change updates dom', function() {
        var accountView = new AccountView();
        accountView.render();
        accountView.model.set('name', 'fanto');
        expect(accountView.$('#name').val()).toEqual('fanto');
    });
});
