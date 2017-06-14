'use strict';

(function(){
    let purchasesApp = angular.module('purchasesApp', [ 'ngMaterial' ] );

    purchasesApp.controller('PurchasesListController', function PurchasesListController($scope){
        $scope.list = model;

        $scope.addItem = ( itemName, itemPrice ) => {
            itemPrice = parseFloat(itemPrice);
            if( itemName!=="" && !isNaN(itemPrice)) {
                $scope.list.items.push({name: itemName, price: itemPrice, done: false});
                $scope.purchasesAdding.$setPristine();
                angular.element(document.forms["purchases-adding"].elements).val('');
            }
        }
    });

    const model = {
        items: [
            { name: "Bread", done: false, price: 15.9 },
            { name: "Butter", done: false, price: 60 },
            { name: "Potatoes", done: true, price: 22.6 },
            { name: "Cheese", done: false, price: 310 }
        ]
    };
})();