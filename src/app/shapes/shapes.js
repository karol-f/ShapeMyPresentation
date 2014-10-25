angular.module( 'webComponentsPresentation.shapes', [
  'webComponentsPresentation.route'
])

.config(function( routeProvider ) {
  routeProvider
    .when('/shapes/:name', {
      templateUrl : 'shapes/shapes.tpl.html',
      controller  : 'ShapesCtrl'
    })
  ;
})

.controller( 'ShapesCtrl', function( $scope, $rootScope, globals, route, director, shapeShifter, $timeout ) {

    var params = route.params;

    switch (params.name) {
      case 'home':
        shapeShifter.action('Web Components');
        break;
      case 'why':
        shapeShifter.action('Why?');
        break;
      case 'wc':
        shapeShifter.action('Web|Components');
        break;
      default:
        shapeShifter.action(params.name);
    }

    $scope.$on('keyUpNext', function() {
      var index = globals.pages.indexOf(route.name);
      var nextIndex = index + 1;
      var nextPage = globals.pages[nextIndex];

      if (nextPage && nextPage.indexOf('slides') > -1) {
        shapeShifter.clear();
        $timeout(director.next, 1000);
      }
      else {
        director.next();
      }
    });

    $scope.$on('keyUpPrev', function() {
      shapeShifter.clear();
      director.prev();
    });

})

;

