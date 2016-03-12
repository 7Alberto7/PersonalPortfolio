(function () {

  angular.module('portfolio.filters', [])
  .filter('normalize', function () {
    return function (input) {
      if (!input) return "";

      input = input
      .replace('Á', 'a')
      .replace('É', 'e')
      .replace('Í', 'i')
      .replace('Ó', 'o')
      .replace('Ú', 'u')
      .replace('á', 'a')
      .replace('é', 'e')
      .replace('í', 'i')
      .replace('ó', 'o')
      .replace('ú', 'u')
      .replace(/ /g, "-");
      return input.toLowerCase();
    };
  })
  .filter('imageify', ['$filter', function ($filter) {
    return function (input) {
      var url = "images/" + $filter('normalize')(input) + ".png";
      return url;
    };
  }])
  .filter('rawHtml', ['$sce', function($sce){
    return function(val) {
      return $sce.trustAsHtml(val);
    };
  }]);

})();
