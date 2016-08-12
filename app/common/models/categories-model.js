angular.module('eggly.models.categories', [])
  .service('CategoriesModel', function($http, $q) {
    var model = this,
        urls = {
          fetch: 'data/categories.json'
        },
        categories;

    function extract(result) {
      return result.data;
    }

    function cacheData(result) {
      categories = extract(result);
      return categories;
    }

    model.getCategories = function() {
      return categories ? $q.when(categories) : $http.get(urls.fetch).then(cacheData);
    };
  });
