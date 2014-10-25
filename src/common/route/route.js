angular.module('webComponentsPresentation.route', ['ngRoute'])

.provider('route', function($routeProvider) {
  // In the provider function, you cannot inject any
  // service or factory. This can only be done at the
  // "$get" method.
  var _root = this;

  this.when = function(path, config) {
    $routeProvider.when(path, config);
    return this;
  };
  this.otherwise = function(opts) {
    if (opts && opts.path) {
      $routeProvider.otherwise({ redirectTo: opts.path });
    }
    return this;
  };
  this.name = '';
  this.params = {};

  this.$get = function($location, $rootScope) {
    return {
      //getter
      when: _root.when,
      otherwise: _root.otherwise,
      name: _root.name,
      params: _root.params,
      next: _root.next,
      path: function(path) {
        //setter
        if (path) {
          $location.path(path);
          if (!$rootScope.$$phase) {
            $rootScope.$apply();
          }
        }
        //getter
        else {
          return $location.path();
        }
      }
    };
  };

})

.run( function ( route, $rootScope, $routeParams, $location ) {
  $rootScope.route = route;

  /**
   * route events
   */
  $rootScope
    .$on('$routeChangeStart', function() {
      $rootScope.$broadcast('routeChangeStart');
    });
  $rootScope
    .$on('$routeChangeSuccess', function() {
      //set current route name
      route.name = $location.path();
      route.params = $routeParams;
      //brodcast event to $rootScope
      $rootScope.$broadcast('routeChangeSuccess');
    });
  $rootScope
    .$on('$routeChangeError', function() {
      $rootScope.$broadcast('routeChangeError');
    });
})

;
