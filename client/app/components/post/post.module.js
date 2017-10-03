import angular from 'angular';
import postComponent from './post.component';
import postsService from '../../services/posts/posts';

const postModule = angular.module('post', [])
  .component('post', postComponent)
  .service('postsService', postsService);
export default postModule;