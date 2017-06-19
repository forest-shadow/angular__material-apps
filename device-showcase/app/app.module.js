'use strict';

(function(){
    let app = angular.module('deviceShowcase', ['ngMaterial']);

    app.controller('ShowcaseController', ($scope) => {
        $scope.phones = [{
            name: 'Nokia Lumia 630',
            year: 2014,
            price: 200,
            company: 'Nokia'
        },{
            name: 'Samsung Galaxy S 4',
            year: 2014,
            price: 400,
            company: 'Samsung'
        },{
            name: 'Mi 5',
            year: 2015,
            price: 300,
            company: 'Xiaomi'
        }];
        $scope.tablets = [{
            name: 'Samsung Galaxy Tab S4',
            year: 2014,
            price: 300,
            company: 'Samsung'
        },{
            name: 'LG G PAD 8.3',
            year: 2013,
            price: 180,
            company: 'LG'
        },{
            name: 'IdeaTab A8',
            year: 2014,
            price: 220,
            company: 'Lenovo'
        }];

        $scope.showcaseModes = [{
            value: 'phones',
            label: 'Phones'
        }, {
            value: 'tablets',
            label: 'Tablets'
        }];

        $scope.data = {};
        $scope.setFile = function () {
            if($scope.data.mode === 'tablets')
                return 'templates/tabletsList.html';
            else if($scope.data.mode === 'phones')
                return 'templates/phonesList.html';
        };

    });
})();