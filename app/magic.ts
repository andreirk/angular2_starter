const message = 'hello';

/**
 * Greeter
 */
class Greeter {
    // constructor(parameters) {
        
    // }

    saySomething(message: string = "wats up") {
        return message + "something";
    }

}


var greeter = new Greeter();

greeter.saySomething();

