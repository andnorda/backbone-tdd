var Backbone = require('backbone');

var AccountCollection = Backbone.Collection.extend({
    url: '/accounts'
});

describe('AccountCollection', function() {
    it('fetches data', function(done) {
        var server = sinon.fakeServer.create();
        server.respondWith('GET', '/accounts',
            [200, { 'Content-Type': 'application/json' },
            '[{"name": "fanto"}]']);
        var accounts = new AccountCollection();
        accounts.on('sync', function() {
            expect(accounts.length).toEqual(1);
            expect(accounts.first().get('name')).toEqual('fanto');
            done();
        });
        accounts.fetch();
        server.respond();
        server.restore();
    });
});
