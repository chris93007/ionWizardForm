angular.module('starter.controllers')

.controller('updateExpenseCtrl', ['$scope','$http','baseUrl','$stateParams','$state', function($scope,$http,baseUrl,$stateParams,$state) {


  $http.get(baseUrl+'api/expenses/'+$stateParams.expenseId).success(function(data){
    console.log(data);
    $scope.data=data;
  });

  $scope.cancel = function() {
      $scope.expenseInfo={};
      $state.go('app.expenses');
  };

}]);
