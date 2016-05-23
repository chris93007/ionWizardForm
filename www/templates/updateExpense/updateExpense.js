angular.module('starter.controllers')

.controller('updateExpenseCtrl', ['$scope','$http','baseUrl','$stateParams', function($scope,$http,baseUrl,$stateParams) {


console.log("update Expense");
console.log($stateParams);

  $http.get(baseUrl+'api/expenses/'+$stateParams.expenseId).success(function(data){
    console.log(data);
  });

}]);
