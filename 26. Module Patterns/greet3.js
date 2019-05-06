function Greetr() {
    this.greeting = 'Hello World@@@ with object';
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();