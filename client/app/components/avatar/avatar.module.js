import angular from 'angular';
import avatarComponent from './avatar.component';

const avatarModule = angular.module('avatar', [])
  .component('avatar', avatarComponent);
export default avatarModule;