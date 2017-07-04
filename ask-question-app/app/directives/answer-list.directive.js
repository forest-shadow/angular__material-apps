'use strict';

(function() {
    let app = angular.module( 'askQuestion' );

    app.directive( 'answerList', function () {

        return {
            link: function (scope, element, attrs) {
                scope.data = scope[ attrs[ "answerList" ] || attrs[ "source" ] ];
            },
            restrict: 'A',
            templateUrl: "./app/templates/answer-list.directive.html"
        }

    } );
})();