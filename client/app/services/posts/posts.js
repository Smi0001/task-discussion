import rawPost from '../../data/posts';

var postDateWiseMap = new Map();
var posts = angular.copy(rawPost);
class postsService {
  
  constructor($filter) {
    'ngInject';
    this.$filter = $filter;
    this._posts = angular.copy(rawPost);
  }
  static get $inject() {
    return ['$filter'];
  }
  
  getAllPosts() {
    return this._posts;
  }

  setPost(modifiedPost) {
    posts = modifiedPost;//save post to DB
  }

  getPostsSortedByRecentDay(posts) {
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
    this.getPostsSortedByRecentDay(posts);

    // club day wise
    postDateWiseMap.clear();
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
  
  addNewPost(postText, loggedInUser, postDate) {
    //create post object
    let note = postText.split('\n')[0];
    let desc = postText;
    let replies = [];
    let postTopic = {
      'note': note,
      'desc': desc,
      'replies': replies
    };
    let postObj = {
      'date': postDate,
      'user': loggedInUser,
      'topic': postTopic
    };
    let rawPost = this.getAllPosts();
    rawPost.push(postObj)//if saving to DB, need not ot push, directly send only new post to save 
    this.setPost(rawPost);
  }
}

export default postsService;