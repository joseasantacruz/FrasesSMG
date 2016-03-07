// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers' ] ) 

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MenuController'
  })

  .state('app.sanmiguel', {
    url: '/sanmiguel',
    views: {
      'menuContent': {
        templateUrl: 'templates/sanmiguel.html',
		controller: 'smgCtrl'
      }
    }
  })

  .state('app.fvd', {
      url: '/fvd',
      views: {
        'menuContent': {
          templateUrl: 'templates/fvd.html',
			controller: 'smgCtrl'
        }
      }
    })
    .state('app.freses', {
      url: '/freses',
      views: {
        'menuContent': {
          templateUrl: 'templates/freses.html',
          controller: 'FrasesCtrl'
        }
      }
    })

  .state('app.desarrollo', {
    url: '/desa',
    views: {
      'menuContent': {
        templateUrl: 'templates/desarrollo.html' 
      }
    }
  })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/freses');
});
