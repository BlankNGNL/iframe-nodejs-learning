function Greetr() {
    this.greeting = 'Greet4 Hello';
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports =  Greetr;