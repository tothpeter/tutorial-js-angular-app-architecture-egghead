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
  .controller('BookmarkListCtrl', function($stateParams, BookmarksModel, CategoriesModel) {
    var bookmarkListCtrl = this;
    bookmarkListCtrl.currentCategoryName = $stateParams.category;

    CategoriesModel.setCurrentCategory($stateParams.category);

    BookmarksModel.getBookmarks()
      .then(function(bookmarks) {
        bookmarkListCtrl.bookmarks = bookmarks;
      });

    bookmarkListCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory;
    bookmarkListCtrl.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;
  });
