let obj = {
    name: 'John Doe',
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();
obj.greet.call({name:'Lotte Doe'}); //param,param
obj.greet.apply({name:'Lotte Doe'}); //[param,param]