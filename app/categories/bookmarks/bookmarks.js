angular.module('categories.bookmarks', [
  'categories.bookmarks.create',
  'categories.bookmarks.edit',
  'eggly.models.categories',
  'eggly.models.bookmarks'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('eggly.categories.bookmarks', {
        url: 'categories/:category',
        views: {
          'bookmarks@': {
            templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
            controller: 'BookmarkListCtrl as bookmarkListCtrl'
          }
        }
      });
  })
  .controller('BookmarkListCtrl', function($stateParams, BookmarksModel) {
    var bookmarkListCtrl = this;
    bookmarkListCtrl.currentCategoryName = $stateParams.category;

    BookmarksModel.getBookmarks()
      .then(function(result) {
        bookmarkListCtrl.bookmarks = result;
      });
  });
