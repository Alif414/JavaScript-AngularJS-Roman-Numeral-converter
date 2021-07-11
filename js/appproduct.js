var app = angular.module('myApp', []);

app.directive('product',function($parse){

    var phone ={};

    var linkProduct = function (scope, element, attributes) {
        /* Evaluates attribute before assigning it into a model */
        scope.modelName = attributes.model;
        scope.modelPrice = attributes.price;
        //Gets the attributes and assigns them
    };

    phone.restrict ='E';
    phone.link = linkProduct;
    phone.template ='<div class="col-md-3"><h4>{{modelName}}</h4><p><b>Price:</b> RM {{modelPrice}}</p></div>';
    phone.scope = {};

    return phone;
});
