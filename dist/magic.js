var message = 'hello';
/**
 * Greeter
 */
var Greeter = (function () {
    function Greeter() {
    }
    // constructor(parameters) {
    // }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = "wats up"; }
        return message + "something";
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething();
//# sourceMappingURL=magic.js.map