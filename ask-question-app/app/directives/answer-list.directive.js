'use strict';

(function() {
    let app = angular.module( 'askQuestion' );

    app.directive( 'answerList', function () {

        return function (scope, element, attrs) {

            let data = scope[ attrs[ "answerList" ] ];

            if ( angular.isArray( data.answers ) ) {
                let divElem = angular.element( "<div>" ).addClass( "answers" );
                element.append( divElem );
                for ( let i = 0; i < data.answers.length; i++ ) {
                    let answerElem = angular.element('<div>').addClass("answer");
                    let voteElem = angular.element('<div>').addClass("vote");

                    let voteUpIcon = angular.element('<i>').addClass("material-icons").text("keyboard_arrow_up"),
                        voteDownIcon = angular.element('<i>').addClass("material-icons").text("keyboard_arrow_down");


                    let voteUpElem = angular.element('<a>').addClass("vote-up").append(voteUpIcon);
                    voteElem.append(voteUpElem);
                    let rateElem = angular.element('<span>').addClass("rate").text(data.answers[i].rate);
                    voteElem.append(rateElem);
                    let voteDownElem = angular.element('<a>').addClass("vote-down").append(voteDownIcon);;
                    voteElem.append(voteDownElem);
                    answerElem.append(voteElem);

                    answerElem.append(angular.element('<b>').text(data.answers[i].text));
                    answerElem.append(angular.element('<p>').text(data.answers[i].author));
                    let iElem =angular.element('<i>').text(data.answers[i].date);
                    let dateElem = angular.element('<p>').append(iElem);
                    answerElem.append(dateElem);
                    divElem.append(answerElem);
                }
            }
        }
    } );
})();