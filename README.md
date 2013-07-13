Klass
=====

Every web developer should create it's own classes implementation.

var Derived = Class.extend({
    a: 10,
    initialize: function(a) {
        this.a = a || 10;
    },
    do : function() { }                                 
});
