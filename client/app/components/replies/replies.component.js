import template from './replies.component.html';
import controller from './replies.controller.js';
import './replies.component.scss';

let repliesComponent = {
  restrict: 'E',
  scope: {
    selectedDate: '='
  },
  template,
  controller,
  controllerAs: 'repliesController'
};
export default repliesComponent;