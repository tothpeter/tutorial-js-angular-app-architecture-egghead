angular.module('categories', ['eggly.models.categories'])
  .config(function($stateProvider) {
    $stateProvider
      .state('eggly.categories', {
        url: '/',
        views: {
          'categories@': {
            controller: 'CategoyListCtrl as categoyListCtrl',
            templateUrl: 'app/categories/categories.tmpl.html'
          },
          'bookmarks@': {
            controller: 'BookmarksCtrl',
            templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
          }
        }
      });
  })
  .controller('CategoyListCtrl', function(CategoriesModel) {
    var categoyListCtrl = this;
    CategoriesModel.getCategories()
      .then(function(result) {
        categoyListCtrl.categories = result;
      });
  });
