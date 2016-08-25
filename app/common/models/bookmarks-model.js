angular.module('eggly.models.bookmarks', [])
  .service('BookmarksModel', function($http, $q) {
    var model = this,
        urls = {
          fetch: 'data/bookmarks.json'
        },
        bookmarks;

    function extract(result) {
      return result.data;
    }

    function cacheData(result) {
      bookmarks = extract(result);
      return bookmarks;
    }

    function find(id) {
      return _.find(bookmarks, function(bookmark) {
        return bookmark.id === parseInt(id, 10);
      });
    }

    model.findById = function(id) {
      var deferred = $q.defer();

      if (bookmarks) {
        deferred.resolve(find(id))
      } else {
        model.getBookmarks().then(function() {
          deferred.resolve(find(id))
        });
      }

      return deferred.promise;
    }

    model.getBookmarks = function() {
      var deferred = $q.defer();

      if (bookmarks) {
        deferred.resolve(bookmarks)
      } else {
        $http.get(urls.fetch).then(function(result) {
          deferred.resolve(cacheData(result))
        });
      }

      return deferred.promise;
    };

    model.createBookmark = function(bookmark) {
      bookmark.id = bookmarks.length;
      bookmarks.push(bookmark);
    };

    model.updateBookmark = function(bookmarkToUpdate) {
      bookmarkIndex = _.findIndex(bookmarks, function(bookmark) {
        return bookmarkToUpdate.id === bookmark.id;
      });

      bookmarks[bookmarkIndex] = bookmarkToUpdate;
      return bookmarks[bookmarkIndex];
    };
  });
