angular.module('starter.controllers')

.controller('expensesCtrl',['$scope','$http','baseUrl','$state', function($scope,$http,baseUrl,$state) {

  $http.get(baseUrl+"api/expenses").success(function (data) {
    $scope.expenses=data;
  });

  $scope.updateExpense=function(id){
    $state.go('app.updateExpense',{expenseId:id});
  }

}]);
