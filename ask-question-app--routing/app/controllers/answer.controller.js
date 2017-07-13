'use strict';

(function(){
    let app = angular.module( 'askQuestion' );

    app.controller( 'AnswerController', function AnswerController($scope, $http, $location, $templateCache, $routeParams) {
        $scope.answer = null;   
         
        $scope.$on('$routeChangeStart', function(event, next, current) {
            if (typeof(current) !== 'undefined'){
                $templateCache.remove(next.templateUrl);
            }
        });
     
        $scope.$on("$routeChangeSuccess", function () {
            var id = $routeParams["id"]
            if(id!=='undefined'){
                
                $http({method:'GET', url:'getAnswer.php', params: {'id':id}}).
                then(function success(response) {
                    $scope.answer = response.data;
                });
            }
        });

        $scope.save = function (answer, answerForm){
            if(answerForm.$valid){
                $http.post("postAnswer.php", answer).then(function success(response) {
                    $location.path("question");
                });
            }
        };
    } );
})();