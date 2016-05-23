angular.module('starter.controllers')

.controller('expensesCtrl',['$scope','$http','baseUrl','$state', function($scope,$http,baseUrl,$state) {

  $http.get(baseUrl+"api/expenses").success(function (data) {
    $scope.expenses=data;
  });

  $scope.updateExpense=function(id){
    console.log("redirect to update screen"+id);
    var expenseInfo={"expenseId":id};
    $state.go('app.updateExpense',{expenseId:id});
  }

}]);
