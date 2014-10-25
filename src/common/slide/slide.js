angular.module('slide', [])

  .directive('slide', function () {
    return {
      templateUrl: 'slide/slide.tpl.html',
      transclude: true,
      link: function(scope, element, attrs) {
        attrs.$observe('active', function(val) {
          if (val) {
            console.log(val);
          }
        });
      }
    };
  })

;
