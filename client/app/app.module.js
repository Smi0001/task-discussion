import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';
import DashboardController from './components/dashboard/dashboard.controller';
import LoginController from './components/login/login.controller';
import TodoController from './components/todo/todo.controller';
import PostController from './components/post/post.controller';
//uiRouter is chosen over ngRoute coz it allows nested views and
// multiple named views, useful with larger app
import uiRouter from 'angular-ui-router';
// commented coz its few dependencies can't be installed due to OS architectural issue
// import ngMaterial from 'angular-material';
// import {MdButtonModule, MdCheckboxModule} from '@angular/material';

const angularApp = angular.module('app', [
  ComponentsModule.name,
  // ngMaterial, MdButtonModule, MdCheckboxModule,
  uiRouter
])
.config(($locationProvider, $stateProvider, $urlRouterProvider) => {
  "ngInject";
  // $locationProvider.hashPrefix('!');
  $stateProvider
    .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/components/dashboard/dashboard.component.html',
        controller: DashboardController          
    })
    .state('login', {
        url: '/login',
        templateUrl: 'app/components/login/login.component.html',
        controller: LoginController
    })
    
    .state('todo', {
      url: '/dashboard/todo',
      // views: {
        // 'content@': {
          templateUrl: 'app/components/todo/todo.component.html',
          controller: TodoController
        // }
      // }
    })
    .state('post', {
      url: '/dashboard/post',
      templateUrl: 'app/components/post/post.component.html',
      controller: PostController,
      resolve: {
        test: () => { return {value: 'post page'}; }  
      }
    });

 // Default page for the router
 $urlRouterProvider.otherwise('/dashboard');
})
// .config(['$routeProvider', '$locationProvider',
//   function ($routeProvider,  $locationProvider) {
//     $locationProvider.hashPrefix('!');
//     $routeProvider
//     .when('/login', {
//       templateUrl: loginTemplate,
//       controller: LoginController
//     })
//     .when('/dashboard', {
//       templateUrl: dashboardTemplate,
//       controller: DashboardController
//     })
//     .when('/todo', {
//       templateUrl: todoTemplate,
//       controller: TodoController
//     })
//     .when('/post', {
//       templateUrl: postTemplate,
//       controller: PostController
//     })
//     .otherwise({ redirectTo: '/dashboard' });
//   }
// ])
.run(['$rootScope', '$location', '$window',
  function ($rootScope, $location, $window) {
    // keep user logged in after page refresh
    var sessionId = $window.sessionStorage.getItem('sessionId');
    $rootScope.$on('$routeChangeStart', function () {
      // redirect to login page if not logged in
      console.log('on $routeChangeStart');
      if ($location.path() !== '/' && !sessionId) {
        $location.path('/login');
      } else {
      // redirect to dashboard page if user is logged in
        $rootScope.isAlive = true;
        $rootScope.username = $window.sessionStorage.getItem('username');;
        $location.path('/dashboard');
      }
  });
}])
.component('app', appComponent);