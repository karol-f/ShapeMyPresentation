/* -----------------------------------------
 App Config
 ----------------------------------------- */

angular.module('webComponentsPresentation.globals', [])

.value('globals', {
  'pageTitle': 'Web Components | meet.js',
  focus: function() {
    window.focus();
  },
  pages: [
    '/shapes/home',
    '/slides/toc',
    '/shapes/why',
    '/slides/why',
    '/shapes/wc',
    '/slides/wc',
    '/shapes/Templates',
    '/slides/templates',
    '/shapes/Custom Elements',
    '/slides/ce',
    '/shapes/Shadow DOM',
    '/slides/shadow',
    '/shapes/HTML Imports',
    '/slides/imports',
    '/shapes/Benefits',
    '/slides/benefits',
    '/shapes/Demo',
    '/slides/demo',
    '/shapes/Dziękuję',
  ],
  keys: {
    next: [
      39,
      32,
      40,
      13
    ],
    prev: [
      37,
      8,
      38
    ]
  }
})

;
