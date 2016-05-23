angular.module('starter')

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu/menu.html",
      controller: 'menuCtrl'
  })

  .state('app.dashboard', {
      url: "/dashboard",
      views: {
          'menuContent': {
              templateUrl: 'templates/dashboard/dashboard.html',
              controller: 'dashboardCtrl'
          }
          // 'tab2': {
          //     templateUrl: 'templates/dashboard/dashboard.html',
          //     controller: 'dashboardCtrl'
          // }
      }
  })

  .state('app.expenses', {
    url: '/expenses',
    views: {
        'menuContent': {
            templateUrl: 'templates/expenses/expenses.html',
            controller: 'expensesCtrl'
          }
    }
  })

  .state('app.goals', {
    url: '/goals',
    params:{
        isAnimated:false
    },
    views: {
        'menuContent': {
          templateUrl: 'templates/goals/goals.html',
          controller: 'goalsCtrl'
        }
    }
  })

  .state('app.addNewExpense', {
    url: '/addExpense',
    views: {
        'menuContent': {
            templateUrl: 'templates/addNewExpense/addNewExpense.html',
            controller: 'addNewExpenseCtrl'
          }
    }
  })

  .state('app.updateExpense', {
    url: '/updateExpense/expenseId',
    views: {
        'menuContent': {
            templateUrl: 'templates/updateExpense/updateExpense.html',
            controller: 'updateExpenseCtrl',
            params: ['expenseId']
          }
    }
  })

  .state('app.addNewGoal', {
    url: '/addGoal',
    views: {
        'menuContent': {
            templateUrl: 'templates/addNewGoal/addNewGoal.html',
            controller: 'addNewGoalCtrl'
          }
    }
  })

  .state('app.transactions', {
    url: '/transactions',
    views: {
      // 'tab1': {
      //   templateUrl: 'templates/transactions/transactions.html',
      //   controller: 'transactionsCtrl'
      // },
      'menuContent': {
        templateUrl: 'templates/transactions/transactions.html',
        controller: 'transactionsCtrl'
        }
    }
  })

  .state('app.settings', {
    url: '/settings',
    views: {
      // 'tab3': {
      //   templateUrl: 'templates/settings/settings.html',
      //   controller: 'settingsCtrl'
      // },
      'menuContent': {
        templateUrl: 'templates/settings/settings.html',
        controller: 'settingsCtrl'
        }
    }
  });

// $urlRouterProvider.otherwise('')
$urlRouterProvider.otherwise(window.globalVariable.startPage.url);


});
