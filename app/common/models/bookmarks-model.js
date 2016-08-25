angular.module('eggly.models.bookmarks', [])
  .service('BookmarksModel', function($http) {
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

    model.getBookmarks = function() {
      return $http.get(urls.fetch).then(cacheData);
    };

    model.createBookmark= function(bookmark) {
      bookmark.id = bookmarks.length;
      bookmarks.push(bookmark);
    };
  });
