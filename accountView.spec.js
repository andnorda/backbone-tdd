var Backbone = require('backbone');
require('backbone.stickit');

var AccountView = Backbone.View.extend({
    model: new Backbone.Model,
    bindings: {
        '#name': 'name'
    },
    render: function() {
        this.$el.html('<input id="name">');
        this.stickit();
    }
});

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
