import angular from 'angular';
    import DashboardModule from './dashboard/dashboard.module';    import LoginModule from './login/login.module';    import PostModule from './post/post.module';    import RepliesModule from './replies/replies.module';    import TodoModule from './todo/todo.module';    import AvatarModule from './avatar/avatar.module';

const ComponentsModule = angular.module('app.components',[
       DashboardModule.name,      LoginModule.name,      PostModule.name,      RepliesModule.name,      TodoModule.name,      AvatarModule.name 
]);

export default ComponentsModule;