import angular from 'angular';
import postComponent from './post.component';
import postsService from '../../services/posts/posts';

const postModule = angular.module('post', [])
  .component('post', postComponent)
  .service('postsService', postsService);
  postModule.filter('searchFor', function(){
        return function(searchArray, searchString){
            let result = [];
            if(!searchString){
                return result;
            }
            searchString = searchString.toLowerCase();
            angular.forEach(searchArray, function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                  result.push(item);
                }
            });
            return result;
        };
  });
    
export default postModule;