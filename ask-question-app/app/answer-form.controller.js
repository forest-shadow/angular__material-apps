'use strict';

(function() {
    let app = angular.module( 'askQuestion' );

    app.controller( 'AnswerFormController', [ '$scope', function AnswerFormController( $scope ) {
        $scope.answer = {};

        $scope.save = function (answer, answerForm){
            if(answerForm.$valid){
                // действия по сохранению
                alert(answer.author + ", ваш ответ сохранен");
            }
        };
    } ] );
})();