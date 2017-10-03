import template from './login.component.html';
import controller from './login.controller.js';
import './login.component.scss';

let loginComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'loginController'
};
export default loginComponent;