angular.module('starter.controllers')

.controller('dashboardCtrl', ['$scope', '$http','baseUrl' ,function($scope,$http,baseUrl) {



  $http.get(baseUrl+"overview").success(function (data) {
    $scope.overview=data;
  });


///////////////


$scope.graph = {};
$scope.graph.data = [
  //Awake
  [16, 15, 20, 12, 16, 12, 8],
  //Asleep
  [8, 9, 4, 12, 8, 12, 14]
];
$scope.graph.labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
$scope.graph.series = ['Awake', 'Asleep'];
}]);
