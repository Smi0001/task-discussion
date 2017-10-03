import angular from 'angular';
    import DashboardModule from './dashboard/dashboard.module';
    import LoginModule from './login/login.module';
    import PostModule from './post/post.module';
    import TodoModule from './todo/todo.module';

const ComponentsModule = angular.module('app.components',[
       DashboardModule.name, 
     LoginModule.name, 
     PostModule.name, 
     TodoModule.name 
]);

export default ComponentsModule;