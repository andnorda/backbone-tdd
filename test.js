var Account = require('backbone').Model;

describe('Account', function() {
    it('fires change event', function(done) {
        var account = new Account();
        account.on('change', function() {
            done();
        });
        account.set('name', 'fanto');
    });
});
