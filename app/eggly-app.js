angular.module('Eggly', [
  'ui.router',
  'categories',
  'categories.bookmarks'
])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('eggly', {
        url: '',
        abstract: true
      });

      $urlRouterProvider.otherwise('/');
  })
  .controller('MainCtrl', function($scope, $state) {
    $scope.currentCategory = null;
    $scope.editedBookmark = null;

    $scope.setCurrentCategory = function(category) {
      $scope.currentCategory = category;
      $state.go('eggly.categories.bookmarks', {category: category.name});

      $scope.cancelCreating();
      $scope.cancelEditing();
    };

    $scope.isCurrentCategory = function(category) {
      return $scope.currentCategory != null && $scope.currentCategory.id == category.id;
    }

    // ----------------------
    // CRUD
    // ----------------------

    resetCreateForm = function(bookmark) {
      $scope.newBookmark = {
        title: '',
        url: '',
        category: $scope.currentCategory.name
      };
    }

    $scope.createBookmark = function(bookmark) {
      bookmark.id = $scope.bookmarks.length;
      $scope.bookmarks.push(bookmark);

      resetCreateForm();
    };

    $scope.updateBookmark = function(bookmark) {
      var index = _.findIndex($scope.bookmarks, function(b) {
        return b.id === bookmark.id;
      });

      $scope.bookmarks[index] = bookmark;
      $scope.editedBookmark = null;
      $scope.isEditing = false;
    }

    $scope.isSelectedBookmark = function(bookmark) {
      return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmark.id;
    };

    $scope.deleteBookmark = function(bookmark) {
      _.remove($scope.bookmarks, function(b) {
        return bookmark.id === b.id;
      })
    };

    // ----------------------
    // Creating and editing states
    // ----------------------

    $scope.isCreating = false;
    $scope.isEditing = false;

    $scope.startCreating = function() {
      $scope.isCreating = true;
      $scope.isEditing = false;

      resetCreateForm();
    }

    $scope.cancelCreating = function() {
      $scope.isCreating = false;
    }

    $scope.startEditing = function(bookmark) {
      $scope.isCreating = false;
      $scope.isEditing = true;
      $scope.editedBookmark = angular.copy(bookmark);
    }

    $scope.cancelEditing = function() {
      $scope.isEditing = false;
      $scope.editedBookmark = null;
    }

    $scope.shouldShowCreating = function() {
      return $scope.currentCategory && !$scope.isEditing;
    }
    $scope.shouldShowEditing = function() {
      return $scope.isEditing && !$scope.isCreating;
    }
  });
