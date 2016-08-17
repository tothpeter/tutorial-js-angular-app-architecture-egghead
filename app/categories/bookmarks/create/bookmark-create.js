angular.module('categories.bookmarks.create', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('eggly.categories.bookmarks.create', {
        url: '/bookmarks/create',
        templateUrl: 'app/categories/bookmarks/create/bookmark-create.tmpl.html',
        controller: 'CreateBookmarkCtrl as createBookmarkCtrl'
      });
  })
  .controller('CreateBookmarkCtrl', function() {

  });
