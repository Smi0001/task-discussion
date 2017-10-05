import template from './avatar.component.html';
import controller from './avatar.controller.js';
import './avatar.component.scss';

let avatarComponent = {
  restrict: 'E',
  bindings: {
    userimage: '@',
    username: '@',
    userfname: '@',
    userlname: '@',

  },
  template,
  controller,
  controllerAs: 'avatarController'
};
export default avatarComponent;