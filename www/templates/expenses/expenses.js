angular.module('starter.controllers')

.controller('expensesCtrl',['$scope','$http','baseUrl', function($scope,$http,baseUrl) {

  $http.get(baseUrl+"api/expenses").success(function (data) {
    $scope.expenses=data;
  });

  $scope.updateExpense=function(id){
    console.log("redirect to update screen"+id);
  }

}]);
