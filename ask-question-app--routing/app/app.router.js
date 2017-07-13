'use strict';

(function(){
    let app = angular.module( 'askQuestion' );

    app.config( function( $routeProvider ) {
        $routeProvider
        .when("/question", {
            templateUrl: './app/templates/question.html',
            controller: 'QuestionController'
        })
        .when("/answer", {
            templateUrl: './app/templates/answer.html',
            controller: 'AnswerController'
        })
        .when("/edit/:id", {
            templateUrl: "views/answer.html",
            controller:'AnswerController'
        })
        .when("/edit/:id/:data*", {
            templateUrl: "views/answer.html",
            controller:'AnswerController'
        })
        .otherwise({redirectTo: '/question'});
    });
})();