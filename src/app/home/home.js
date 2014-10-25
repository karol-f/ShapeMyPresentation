angular.module( 'webComponentsPresentation.home', [
  'webComponentsPresentation.route'
])

.config(function( routeProvider ) {
  routeProvider
    .when('/home', {
      templateUrl : 'home/home.tpl.html',
      controller  : 'HomeCtrl'
    });
})

.controller( 'HomeCtrl', function( $scope, shapeShifter ) {

  shapeShifter.action('Home');

})

;

