(function () {

  var app = angular.module('portfolio', [
    'ngRoute',
    'portfolio.controllers',
    'portfolio.directives',
    'portfolio.filters',
    'portfolio.services'
  ]);

  app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioController'
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);

})();
