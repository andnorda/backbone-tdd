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

module.exports = Account;
