import template from './todo.component.html';
import controller from './todo.controller.js';
import './todo.component.scss';

let todoComponent = {
  bindings: {},
  template,
  controller,
  controllerAs: 'todoController'
};
export default todoComponent;