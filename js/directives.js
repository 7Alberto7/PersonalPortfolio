(function () {

  angular.module('portfolio.directives', ['portfolio.services'])
    .directive('portfolioProjects', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/portfolio-projects.html'
      };
    })

    .directive('portfolioSkills', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/portfolio-skills.html'
      };
    })

    .directive('portfolioWall', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/portfolio-wall.html'
      };
    })

    .directive('portfolioContact', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/portfolio-contact.html'
      };
    })

    .directive('onErrorSrc', function () {
      return {
        link: function(scope, element, attrs) {
          element.bind('error', function() {
            if (attrs.src != attrs.onErrorSrc) {
              attrs.$set('src', attrs.onErrorSrc);
            }
          });
        }
      }
    })
    .directive('openModal', function () {
      return {
        link: function(scope, element, attrs) {
          element.bind('click', function() {
            $(attrs.openModal).openModal();
          });
        }
      }
    })
    .directive("materialboxed", ["$timeout", function($timeout){
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          $timeout(function(){
            element.materialbox();
          });
        }
      }
    }])
    .directive('scrollTo', function ($location, anchorSmoothScroll) {
        return function(scope, element, attrs) {
            element.bind('click', function(event) {
                event.stopPropagation();
                var off = scope.$on('$locationChangeStart', function(ev) {
                    off();
                    ev.preventDefault();
                });
                var location = attrs.scrollTo;
                $location.hash(location);
                anchorSmoothScroll.scrollTo(location);
            });

        };
    });

})();
