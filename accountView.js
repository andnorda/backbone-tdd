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

module.exports = AccountView;
