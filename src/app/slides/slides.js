angular.module( 'webComponentsPresentation.slides', [
  'webComponentsPresentation.route'
])

.config(function( routeProvider ) {
  routeProvider
    .when('/slides/:slide', {
      templateUrl : 'slides/slides.toc.tpl.html',
      controller  : 'SlidesCtrl'
    })
    .when('/slides/toc', {
      templateUrl : 'slides/slides.toc.tpl.html',
      controller  : 'SlidesCtrl'
    })
    .when('/slides/why', {
      templateUrl : 'slides/slides.why.tpl.html',
      controller  : 'SlidesCtrl'
    })
    .when('/slides/wc', {
      templateUrl : 'slides/slides.wc.tpl.html',
      controller  : 'SlidesCtrl'
    })
    .when('/slides/templates', {
      templateUrl : 'slides/slides.templates.tpl.html',
      controller  : 'SlidesCtrl'
    })
    .when('/slides/ce', {
      templateUrl : 'slides/slides.ce.tpl.html',
      controller  : 'SlidesCtrl'
    })
    .when('/slides/shadow', {
      templateUrl : 'slides/slides.shadow.tpl.html',
      controller  : 'SlidesCtrl'
    })
    .when('/slides/imports', {
      templateUrl : 'slides/slides.imports.tpl.html',
      controller  : 'SlidesCtrl'
    })
    .when('/slides/benefits', {
      templateUrl : 'slides/slides.benefits.tpl.html',
      controller  : 'SlidesCtrl'
    })
    .when('/slides/demo', {
      templateUrl : 'slides/slides.demo.tpl.html',
      controller  : 'SlidesCtrl'
    })
  ;
})

.controller( 'SlidesCtrl', function( $scope, reveal, director ) {

  reveal.start()
    .then(function() {
      director.next();
    },
    function() {
      director.prev();
    });

})

;

