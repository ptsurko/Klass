(function() {
    this.Class = function() { };

    Class.extend = function(props) {
        function ClassToCreate() {
            if(ClassToCreate.prototype.initialize){
                ClassToCreate.prototype.initialize.apply(this, arguments);
            }
        }
        ClassToCreate.prototype = new this();

        for(var prop in props) {
            ClassToCreate.prototype[prop] = props[prop];
        }

        ClassToCreate.extend = arguments.callee;
        ClassToCreate.prototype.constructor = ClassToCreate;
        ClassToCreate.prototype.super = this.prototype;

        return ClassToCreate;
    }
})();