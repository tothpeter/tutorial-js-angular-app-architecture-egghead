angular.module('categories.bookmarks.create', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('eggly.categories.bookmarks.create', {
        url: '/bookmarks/create',
        templateUrl: 'app/categories/bookmarks/create/bookmark-create.tmpl.html',
        controller: 'CreateBookmarkCtrl as createBookmarkCtrl'
      });
  })
  .controller('CreateBookmarkCtrl', function($state, $stateParams, BookmarksModel) {
    var createBookmarkCtrl = this;

    function returnToBookmarsk() {
      $state.go('eggly.categories.bookmarks', {
        category: $stateParams.category
      });
    }

    function cancelCreating() {
      returnToBookmarsk();
    }

    function createBookmark(bookmark) {
      BookmarksModel.createBookmark(bookmark);
      returnToBookmarsk();
    }

    function resetForm() {
      createBookmarkCtrl.newBookmark = {
        title: '',
        url: '',
        category: $stateParams.category
      };
    }

    createBookmarkCtrl.cancelCreating = cancelCreating;
    createBookmarkCtrl.createBookmark = createBookmark;

    resetForm();
  });
