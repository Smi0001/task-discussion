import angular from 'angular';
    import AvatarModule from './avatar/avatar.module';
    import DashboardModule from './dashboard/dashboard.module';
    import LoginModule from './login/login.module';
    import PostModule from './post/post.module';
    import RepliesModule from './replies/replies.module';
    import TodoModule from './todo/todo.module';

const ComponentsModule = angular.module('app.components',[
       AvatarModule.name, 
     DashboardModule.name, 
     LoginModule.name, 
     PostModule.name, 
     RepliesModule.name, 
     TodoModule.name
]);

export default ComponentsModule;