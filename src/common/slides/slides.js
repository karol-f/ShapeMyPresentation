angular.module('slides', [])

  .directive('slides', function () {
    return {
      templateUrl: 'slides/slides.tpl.html',
      transclude: true,
      link: function(scope, element) {

        this.getActiveSlide = function getActiveSlide() {
          var $activeSlide = element.find('.active').first();
          if (!$activeSlide.length) {
            $activeSlide = element.find('shape, slide').first();
          }
          return $activeSlide;
        };

        this.setActiveSlide = function setActiveSlide(nr) {
          var slideNr = nr || 0;

          var $slides = element.find('shape, slide');
          $slides.removeAttr('active');

          var $newActiveSlide = $slides.eq(slideNr);
          $newActiveSlide.attr('active', 'true');
        };

        this.setActiveSlide();
      }
    };
  })

;
