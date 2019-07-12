angular.module('TestApp',[]);

angular.module('TestApp').controller('MainController',ctrlFunc);

function ctrlFunc() {
    this.message = 'Hello';

    this.people = [
        {
            name:'Mike Yan'
        },
        {
            name:'Noella Schaap'
        },
        {
            name:'Sierle Toonen'
        }
    ]
}