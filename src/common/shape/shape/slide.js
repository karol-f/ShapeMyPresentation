angular.module('shape', [])

  .directive('shape', function () {
    return {
      link: function(scope, element, attrs) {
        attrs.$observe('active', function(val) {
          if (val) {
            console.log(attrs.action);
          }
        });
      }
    };
  })

;
