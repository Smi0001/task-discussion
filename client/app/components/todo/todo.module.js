import angular from 'angular';
import todoComponent from './todo.component';
import todoService from '../../services/todolist/todolist';

const todoModule = angular.module('todo', [])
  .component('todo', todoComponent)
  .service('todoService', todoService);
export default todoModule;