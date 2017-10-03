import template from './dashboard.component.html';
import controller from './dashboard.controller.js';
import './dashboard.component.scss';

let dashboardComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'dashboardController'
};
export default dashboardComponent;