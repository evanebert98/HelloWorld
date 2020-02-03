var HelloWorld = (function () {
    function HelloWorld(firstName, lastName) {
        this.firstName = '';
        this.firstName = firstName;
        this.LastName = lastName;
    }
    HelloWorld.prototype.sayhello = function () {
        console.log('Hello World!' + 'My name is ' + this.firsName + ' ' + this.lastName);
    };
    return HelloWorld;
})();
var myHelloClassInstance = new HelloWorld('Evan', 'Ebert');
myHelloClassInstance.sayHello();
greet();
console.log(Evan, Ebert);
ShowGreet();
