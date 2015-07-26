var Backbone = require('backbone');

var AccountView = Backbone.View.extend({
    render: function() {
        this.$el.html('<input id="name">');
    }
});

describe('Account View', function() {
    it('has a name field', function() {
        var accountView = new AccountView();
        accountView.render();
        expect(accountView.$('input#name').length).toEqual(1);
    });
});
