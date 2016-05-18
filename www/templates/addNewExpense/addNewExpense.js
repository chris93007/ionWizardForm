angular.module('starter.controllers')

.controller('addNewExpenseCtrl', ['$scope', '$state', function($scope, $state) {


    $scope.expenseInfo={};

    //
    // $scope.$watch('[expenseInfo]', function () {
    //   console.log($scope.expenseInfo);
    // });


    $scope.cancel = function() {
        $scope.expenseInfo={};
        $state.go('app.expenses');
    };

    $scope.start = function() {
        $state.go('app.expenses');
    };

    $scope.startCondition = function() {
        return angular.isDefined($scope.expenseInfo.description && $scope.expenseInfo.frequency && $scope.expenseInfo.amount && $scope.expenseInfo.category && $scope.expenseInfo.payBy);
    };

}]);
