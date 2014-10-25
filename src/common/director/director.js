angular.module('director', [])

  .service('director', function ($rootScope, $location, route, globals, debounce) {
    this.next = debounce(300, function () {
      console.log('director::next');
      var length = globals.pages.length;
      var index = globals.pages.indexOf(route.name);
      if (index > -1 && index < length) {
        route.path(globals.pages[index + 1]);
      }
    });

    this.prev = debounce(300, function () {
      var index = globals.pages.indexOf(route.name);
      if (index > -1 && index > 0) {
        route.path(globals.pages[index - 1]);
      }
    });
  })

  .directive('director', function (globals) {
    return {
      link: function() {
        $(function() {
          globals.focus();
        });
      }
    };
  })

;
