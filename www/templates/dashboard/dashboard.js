angular.module('starter.controllers')

.controller('dashboardCtrl', ['$scope', '$http','baseUrl' ,function($scope,$http,baseUrl) {



  $http.get(baseUrl+"overview").success(function (data) {
    $scope.overview=data;
  });

}]);
