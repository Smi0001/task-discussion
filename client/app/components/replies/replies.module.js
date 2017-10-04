import angular from 'angular';
import repliesComponent from './replies.component';

const repliesModule = angular.module('replies', [])
  .component('replies', repliesComponent);
export default repliesModule;