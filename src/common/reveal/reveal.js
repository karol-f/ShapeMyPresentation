/*global hljs*/
angular.module('reveal', [])

  .service('reveal', function ($q) {
    var _root = this;

    var deffer = $q.defer();
    this.promise = function() {
      return deffer.promise;
    };
    this.promisePrepare = function() {
      deffer = $q.defer();
    };
    this.promiseResolve = function() {
      deffer.resolve();
    };
    this.promiseReject = function() {
      deffer.reject();
    };

    this.start = function() {
      _root.promisePrepare();
      Reveal.initialize({
        // Display controls in the bottom right corner
        controls: false,

        // Display a presentation progress bar
        progress: false,

        // Display the page number of the current slide
        slideNumber: false,

//      keyboard: false,
        // Number of milliseconds between automatically proceeding to the
        // next slide, disabled when set to 0, this value can be overwritten
        // by using a data-autoslide attribute on your slides
        autoSlide: 0,

        // Transition style
        transition: 'fade', // default/cube/page/concave/zoom/linear/fade/none

        // Transition speed
        transitionSpeed: '1000', // default/fast/slow

        // Transition style for full page slide backgrounds
        backgroundTransition: 'default', // default/none/slide/concave/convex/zoom
        minScale: 0.5,
        maxScale: 2.0,
        width: 960,
        height: 700
      });
      hljs.initHighlightingOnLoad();
      Reveal.slide( 0 );

      return _root.promise();
    };

  })

  .run( function ( $rootScope, reveal, globals ) {
    $('body').unbind('keydown.reveal').bind('keydown.reveal', function(){
      if ( globals.keys.next.indexOf(event.which) > -1 && Reveal.isLastSlide() ) {
        if (!Reveal.availableFragments().next) {
          $rootScope.$emit('slideshow:finished');
          reveal.promiseResolve();
          Reveal.removeEventListeners();
        }
      }
      if ( globals.keys.prev.indexOf(event.which) > -1 && Reveal.isFirstSlide() ) {
        if (!Reveal.availableFragments().prev) {
          $rootScope.$emit('slideshow:beforeStart');
          reveal.promiseReject();
          Reveal.removeEventListeners();
        }
      }
    });
  })

;
