angular.module('starter.controllers')

.controller('updateExpenseCtrl', ['$scope','$http','baseUrl','$stateParams','$state', function($scope,$http,baseUrl,$stateParams,$state) {
 
 	//console.log("IN updateExpenseCTrl")

  $http.get(baseUrl+'api/expenses/'+$stateParams.expenseId).success(function(data){
    //console.log(data);
     
    //$scope.category=data.category.data;

  	 $scope.data=data;
     console.log($scope.data);
     $scope.id=data.id;
     console.log($scope.id); 	


    $scope.backToExpenses = function(){
        $scope.expenseInfo={};
        $state.go('app.expenses');
    };

    $scope.updateExpense =function(id){
    	console.log("In updateExp");
   	    console.log("id:" +id);
   	    $state.go('app.updateExpense',{expenseId:id});
   	    console.log("$scope.id:" +$scope.id);

   	    //$scope.data= data;
   	   

    };

  });

// api :

}

]);
