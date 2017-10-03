import angular from 'angular';
import loginComponent from './login.component';
import loginService from '../../services/login/login';

const loginModule = angular.module('login', [])
  .service('loginService', loginService)
  .component('login', loginComponent);
export default loginModule;