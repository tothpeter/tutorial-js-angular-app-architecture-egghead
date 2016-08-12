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
      categories = extract(result);
      return categories;
    }

    model.getBookmarks = function() {
      return $http.get(urls.fetch).then(cacheData);;
    };
  });
