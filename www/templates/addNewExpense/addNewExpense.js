angular.module('starter.controllers')

.controller('addNewExpenseCtrl', ['$scope', '$state','$http','baseUrl','$filter','$log','$q','$timeout', function($scope, $state,$http,baseUrl,$filter,$log,$q,$timeout) {


    $scope.expenseInfo={};
    var params={};

    $scope.payby=new Date();

    var allOptions=[];

    $http.get(baseUrl+"frequency").success(function (data) {
      $scope.frequencies=data.frequency;
    });

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
      console.log(params);
      $http.post(baseUrl+"api/expenses",params).success(function(data){
        console.log(data);
      })
      $state.go('app.expenses');
    };

    $scope.applyCondition = function() {
        return angular.isDefined(true);
    };


  // Autocomplete

   $scope.simulateQuery = false;
   $scope.isDisabled    = false;
   $scope.selectedItem;


   $scope.options=[];

   $http.get(baseUrl+"categories").success(function (data) {
     for(var i=0;i<data.categories.length;i++){
       data.categories[i].lowercase=data.categories[i].title.toLowerCase();
     }
     $scope.options=data.categories;
      console.log($scope.options);
   });

   $scope.querySearch   = querySearch;
   $scope.selectedItemChange = selectedItemChange;
   $scope.searchTextChange   = searchTextChange;
   $scope.searchText;

   $scope.newState = newState;

   function newState(state) {
     alert("New Category to be Added");
   }

   // ******************************
   // Internal methods
   // ******************************

   /**
    * Search for states... use $timeout to simulate
    * remote dataservice call.
    */
   function querySearch (query) {
     var results = query ? $scope.options.filter( createFilterFor(query) ) : $scope.options,
         deferred;
     if ($scope.simulateQuery) {
       deferred = $q.defer();
       $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
       return deferred.promise;
     } else {
       return results;
     }
   }

   function searchTextChange(text) {
     $log.info('Text changed to ' + text);
   }

   function selectedItemChange(item) {
     $log.info('Item changed to ' + JSON.stringify(item));
   }

   /**
    * Build `states` list of key/value pairs
    */

   /**
    * Create filter function for a query string
    */
   function createFilterFor(query) {
     var lowercaseQuery = angular.lowercase(query);

     return function filterFn(state) {
       return (state.lowercase.indexOf(lowercaseQuery) === 0);
     };

   }


}]);
