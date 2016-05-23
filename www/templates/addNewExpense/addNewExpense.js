angular.module('starter.controllers')

.controller('addNewExpenseCtrl', ['$scope', '$state','$http','baseUrl','$filter', function($scope, $state,$http,baseUrl,$filter) {


    $scope.expenseInfo={};
    var params={};
    $scope.toDisplay={};
    $scope.payby=new Date();
    $scope.allcategories = [];
    $scope.selectedCategory = [];
    $scope.selectedFrequency = [];
    $scope.allFrequencies = [];
    var allOptions=[];

    $http.get(baseUrl+"categories").success(function (data) {
        allOptions=data.categories;
        allcategories=data.categories;
    });


    // $http.get(baseUrl+"frequency").success(function (data) {
    //   console.log(data);
    // });

    function formatDate(date) {
      var d = new Date(date || Date.now()),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return([year,month,day].join('-'));

    }


    $scope.cancel = function() {
        $scope.expenseInfo={};
        $state.go('app.expenses');
    };

    $scope.apply = function() {
      params.description=$scope.expenseInfo.description;
      params.category=$scope.expenseInfo.category.id;
      params.frequency=$scope.expenseInfo.frequency.id;
      params.noofinstances=$scope.expenseInfo.noofinstances;
      params.amount=$scope.expenseInfo.amount;
      params.payby=formatDate($scope.expenseInfo.payby);
      // params.payby=$scope.expenseInfo.payby;
      // formatDate(params.payby);
      console.log(params);
      $http.post(baseUrl+"api/expenses",params).success(function(data){
        console.log(data);
      })
      $state.go('app.expenses');
    };

    $scope.applyCondition = function() {
        return angular.isDefined(true);
    };


    $scope.$watchCollection('[expenseInfo.category]', function () {
        if($scope.expenseInfo.category){
          $http.get(baseUrl+"frequency").success(function (data) {
            allOptions=data.frequency;
            allFrequencies=data.frequency;
          });
        }
    });

   $scope.queryGroups = function(search) {
       var firstPass = $filter('filter')(allOptions, {title:search});
       return firstPass.filter(function(item) {
           return $scope.selectedCategory.indexOf(item) === -1;
       });
   };

   $scope.queryGroups = function(search) {
       var firstPass = $filter('filter')(allOptions, {title:search});
       return firstPass.filter(function(item) {
           return $scope.selectedFrequency.indexOf(item) === -1;
       });
   };

   $scope.$watchCollection('selectedCategory', function() {
       $scope.availableGroups = $scope.queryGroups('');
       if($scope.selectedCategory[0]){
          $scope.expenseInfo.category=$scope.selectedCategory[0];
          $scope.disable=true;
       }
       else{
         delete   $scope.expenseInfo.category;
         $scope.disable=false;
         allOptions=allcategories;
       }

   });

   $scope.$watchCollection('selectedFrequency', function() {
       $scope.availableGroups = $scope.queryGroups('');
       if($scope.selectedFrequency[0]){
            $scope.expenseInfo.frequency=$scope.selectedFrequency[0];
            $scope.disable2=true;
       }else{
           delete   $scope.expenseInfo.category;
           $scope.disable2=false; 
       }

   });

}]);
