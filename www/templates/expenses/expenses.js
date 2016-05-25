angular.module('starter.controllers')

.controller('expensesCtrl',['$scope','$http','baseUrl','$state', function($scope,$http,baseUrl,$state) {

  $http.get(baseUrl+"api/expenses").success(function (data) {
    $scope.expenses=data;
    $scope.expenses.average=4500;
    $scope.expenses.total=5000;
    $scope.expenses.totalStatus="decline";
  });

  $scope.updateExpense=function(id){
    console.log(id);;
    $state.go('app.updateExpense',{expenseId:id});
  }

  ///////////////
  Chart.defaults.global.legend.display = false;
  var ctx = document.getElementById("expenseChart").getContext("2d");
  var gradient = ctx.createLinearGradient(0, 0, 0, 250);
      gradient.addColorStop(0, 'rgba(122,179,238,1)');
      gradient.addColorStop(0.5, 'rgba(77,121,207,1)');
      gradient.addColorStop(1, 'rgba(63,81,181,1)');



      var data = {
           labels : ["02:00","04:00","06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","00:00"],
          datasets: [
              {
                  label: "My First dataset",
                  fill: true,
                  backgroundColor:gradient,
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: 'rgba(122,179,238,1)',
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 0,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 0,
                  pointHitRadius: 10,
                  data : [25.0,32.4,22.2,39.4,34.2,22.0,25.2,24.1,20.0,18.4,19.1,17.4]
              }
          ]
      };

      var options={
              scales: {
                  yAxes: [{
                      display:false
                  }],
                  xAxes: [{
                      display:false
                  }]
              }
          };
          var overviewChart = new Chart(ctx, {
              type: 'line',
              data: data,
              options: options
          });


}]);
