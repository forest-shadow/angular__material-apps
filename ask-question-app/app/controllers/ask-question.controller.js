'use strict';

(function(){
    let app = angular.module( 'askQuestion' );

    app.controller( 'AskQuestionController', ['$scope', '$http', function AskQuestionController( $scope, $http ) {

        $http( { method: 'GET', url: './app/json/question.json' } ).then( function successCallback( response ) {
            $scope.question = response.data.question;
        } );

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
    } ] );
})();