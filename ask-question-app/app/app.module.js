'use strict';

(function(){
    let app = angular.module( 'askQuestion', ['ngMaterial'] );

    app.controller( 'AskQuestionController', function( $scope ) {
        $scope.question = {
            text:   'Which js-framework is better to use?',
            author: 'John Johns',
            date:   '20/10/2013',
            answers: [
                {
                    text:   'AngularJS!',
                    author: 'Peter Smith',
                    date:   '20/10/2013',
                    rate:   2
                },
                {
                    text:   'AngularJS better than all',
                    author: 'David Flanigan',
                    date:   '15/10/2013',
                    rate:   0
                },
                {
                    text:   'I want to use knockout',
                    author: 'Unknown',
                    date:   '10/10/2013',
                    rate:   3
                }
            ]
        };

        $scope.voteUp = function (answer) {
            answer.rate++;
        };

        $scope.voteDown = function (answer) {
            answer.rate--;
        };

        $scope.questColorClass= "questcolor";

        $scope.changeClass = function (e) {
            $scope.questColorClass = e.type === "mouseover" ? "questselectedcolor" : "questcolor";
        };
    } );
})();