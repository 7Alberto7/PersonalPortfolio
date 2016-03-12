(function (_) {

  angular.module('portfolio.controllers', [])
  .controller('PortfolioController', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
    angular.element(document).ready(function () {
      adjustBackground(document.getElementById("main-section"), 0);

      //Materialize functions
      $('.button-collapse').sideNav();
      $('.modal-trigger').leanModal();
      $('.materialboxed').materialbox();
      $('.scrollspy').scrollSpy();
    });

    function adjustBackground(backgroundElem, offset) {
      backgroundElem.style.height = (window.innerHeight) + "px";
    }
  }])
  .controller('ProjectController', ['$scope', 'projectService', function ($scope, projectService) {

    projectService.getProjects().then(function (data) {
      $scope.projects = data;
    });

  }])
  .controller('ProjectController', ['$scope', 'projectService', function ($scope, projectService) {

    projectService.getProjects().then(function (data) {
      $scope.projects = data;
    });

  }])
  .controller('SkillsController', ['$scope', 'skillsService', function ($scope, skillsService) {

    skillsService.getSkills().then(function (data) {
      $scope.skills = data;
    });
    
    this.showWall = function () {
      $('#skills-section').hide({easing: "swing",
                    direction: "left",
                    duration: "slow"});
      $('#wall-section').show({easing: "swing",
                    direction: "left",
                    duration: "slow"});
    };

  }])
  .controller('DiplomaController', ['$scope', 'diplomaService', function ($scope, diplomaService) {
    diplomaService.getDiplomas().then(function (data) {
      $scope.diplomas = data;
    });
    
    this.hideWall = function () {
      $('#wall-section').hide({easing: "swing",
                    direction: "right",
                    duration: "slow"});
      $('#skills-section').show({easing: "swing",
                    direction: "right",
                    duration: "slow"});
    };

  }])
  .controller('ContactController', ['$scope', '$http', function ($scope, $http) {
    $scope.mailData = {};
    $scope.submission = false;
    var param = function(data) {
      var returnString = '';
      for (d in data){
        if (data.hasOwnProperty(d))
          returnString += d + '=' + data[d] + '&';
      }
      return returnString.slice( 0, returnString.length - 1 );
    };
    $scope.sendMail = function() {
      $http({
        method : 'POST',
        url : 'php/sendMail.php',
        data : param($scope.mailData),
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .success(function(data) {
        console.log(data);
        if (data.success) {
          $scope.mailData = {};
        }
        $scope.sentMessage = data.message;
        $scope.sent = true;
      });
    };
  }]);

})(_);
