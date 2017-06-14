'use strict';

(function() {
    let app = angular.module('MyAngularApp', ['ngMaterial', 'users']);

    app.run(function(){
        console.log('TestApp is running');
    });

    app.config( function( $mdIconProvider, $mdThemingProvider ){
       // use $mdIconProvider for parsing svg icons boilerplate
        $mdIconProvider.defaultIconSet('./assets/images/svg/avatars.svg', 128)
            .icon( 'hamburger',  './assets/images/svg/hamburger.svg',    128)
            .icon( 'share',      './assets/images/svg/share.svg',        128)
        ;

        $mdThemingProvider.theme( 'default' )
            .primaryPalette( 'brown' )
            .accentPalette( 'red' )
        ;
    });
})();
