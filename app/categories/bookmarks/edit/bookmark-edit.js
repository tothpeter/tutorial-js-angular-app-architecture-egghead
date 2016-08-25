angular.module('categories.bookmarks.edit', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('eggly.categories.bookmarks.edit', {
        url: '/bookmarks/:bookmarkId/edit',
        templateUrl: 'app/categories/bookmarks/edit/bookmark-edit.tmpl.html',
        controller: 'EditBookmarkCtrl as editBookmarkCtrl'
      });
  })
  .controller('EditBookmarkCtrl', function($state, $stateParams, BookmarksModel) {
    var editBookmarkCtrl = this;

    function returnToBookmarsk() {
      $state.go('eggly.categories.bookmarks', {
        category: $stateParams.category
      });
    }

    function cancelEditing() {
      returnToBookmarsk();
    }

    function setEditedBookmark() {
      BookmarksModel.findById($stateParams.bookmarkId).then(function(bookmark) {
        if (bookmark) {
          editBookmarkCtrl.editedBookmark = angular.copy(bookmark);
        } else {
          returnToBookmarsk();
        }
      });
    }

    function updateBookmark(bookmark) {
      BookmarksModel.updateBookmark(bookmark);
    }


    editBookmarkCtrl.updateBookmark = updateBookmark;
    editBookmarkCtrl.cancelEditing = cancelEditing;

    setEditedBookmark();
  });
