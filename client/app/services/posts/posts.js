import posts from '../../data/posts';

var postDateWiseMap = new Map();

class postsService {
  
  constructor($filter) {
    'ngInject';
    this.$filter = $filter;
  }
  static get $inject() {
    return ['$filter'];
  }
  getPostsSortedByRecentDay() {
    posts
    .sort((b,a) => {
      return (a.day > b.day) ?
        1 :
        (
          (b.day > a.day) ? -1 : 0
        );
    });
  }
  getPostsDateWise() {
    posts.forEach(function(currentPost) {
      currentPost.day = this.$filter('date')(new Date(currentPost.date), 'MMM d, y');
    }, this);
    // sorted by day
    this.getPostsSortedByRecentDay();

    // club day wise
    var prevPostDay = posts[0].day;
    postDateWiseMap.set(prevPostDay, []);
    var prevPostArray = [];
    posts.forEach(function(currentPost) {
      if (postDateWiseMap.has(currentPost.day)) {
        prevPostArray.push(currentPost);
      } else {
        postDateWiseMap.set(prevPostDay, prevPostArray);
        prevPostDay = currentPost.day;
        prevPostArray = [];
        postDateWiseMap.set(prevPostDay, prevPostArray);
        prevPostArray.push(currentPost);
      }
    }, this);
    postDateWiseMap.set(prevPostDay, prevPostArray);
    

    return postDateWiseMap;
  }
  
}

export default postsService;