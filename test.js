var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-validation')
_.extend(Backbone.Model.prototype, Backbone.Validation.mixin);

var Account = Backbone.Model.extend({
    validation: {
        name: {
            required: true,
            msg: 'name, plz'
        }
    }
});

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
