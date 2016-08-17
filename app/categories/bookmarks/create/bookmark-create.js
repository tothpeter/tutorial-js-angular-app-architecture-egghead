angular.module('categories.bookmarks.create', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('eggly.categories.bookmarks.create', {
        url: '/bookmarks/create',
        views: {
          templateUrl: 'app/categories/bookmarks/create/bookmark-create.tmpl.html',
          controller: 'CreateBookmarkCtrl as createBookmarkCtrl'
        }
      });
  })
  .controller('CreateBookmarkCtrl', function() {

  });
