angular.module('starter.controllers')

.controller('dashboardCtrl', ['$scope', '$http','baseUrl','$state' ,function($scope,$http,baseUrl,$state) {



  $http.get(baseUrl+"overview").success(function (data) {
    $scope.overview=data;
  });

///////////////
Chart.defaults.global.legend.display = false;
var ctx = document.getElementById("overviewChart").getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, 0, 500);
    gradient.addColorStop(0, 'rgba(25,32,71,1)');
    gradient.addColorStop(1, 'rgba(19,25,62,0)');
var overviewChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            fillColor: gradient,
            label: '# of Votes',
            data: [12, 19, 13, 9, 12, 3]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display:false
            }],
            xAxes: [{
                display:false
            }]
        }
    }
});

}]);
