/*global S */
angular.module('shapeShifter', [])

  .service('shapeShifter', function ($q) {
    var _root = this;
    var shapeShifter = S.UI;

    var ready = $q.defer();
    this.ready = function() {
      return ready.promise;
    };
    this.readyResolve = function() {
      ready.resolve();
    };

    this.action = function(action) {
      _root.ready()
        .then(function() { //success
          shapeShifter.simulate(action);
        }
      );
    };
    this.clear = function() {
      this.action('||');
    };

  })

  .directive('shapeShifterReady', function (route, shapeShifter) {
    return {
      link: function(scope, element) {
        $(function() {
          (function checkForClassChanges() {
            if (element.hasClass('body--ready')) {
              shapeShifter.readyResolve();
            }
            else {
              setTimeout(checkForClassChanges, 500);
            }
          })();

        });
      }
    };
  })

;
