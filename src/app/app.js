angular.module( 'webComponentsPresentation', [
  'ngRoute',
  'ngAnimate',
  'templates-app',
  'templates-common',

  'webComponentsPresentation.home',
  'webComponentsPresentation.slides',
  'webComponentsPresentation.shapes',

  'webComponentsPresentation.globals',
  'webComponentsPresentation.route',
  'shapeShifter',
  'director',
  'reveal',

  'rt.debounce'
])

.config( function myAppConfig ( routeProvider, $compileProvider ) {
  routeProvider
    .otherwise({ path: 'shapes/home' });

  //Tools like Protractor and Batarang need this information to run, but you can disable this in production for a significant performance boost
  $compileProvider.debugInfoEnabled(false);
})

.controller( 'AppCtrl', function AppCtrl ( $scope, globals ) {
  $scope.globals = globals;
  $scope._ = window._;

  function preloadImg(src) {
    $('<img/>')[0].src = src;
  }
  preloadImg('');
})

.run( function run ( globals ) {
  globals.focus();
})

.directive('broadcastKeyUp', function (globals) {
  return {
    link: function(scope, element) {
      $(function() {
        element.on('keyup', function(event) {

//          console.log('keyup: ', event.which);
          if (globals.keys.next.indexOf(event.which) > -1) {
//            console.log('keyupNext: ', event.which);
            scope.$root.$broadcast('keyUpNext', event.which);
          }
          if (globals.keys.prev.indexOf(event.which) > -1) {
//            console.log('keyupPrev: ', event.which);
            scope.$root.$broadcast('keyUpPrev', event.which);
          }
        });

      });
    }
  };
})

;
