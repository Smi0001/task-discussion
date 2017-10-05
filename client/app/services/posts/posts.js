import rawPost from '../../data/posts';

var postDateWiseMap = new Map();
var posts = angular.copy(rawPost);
class postsService {
  
  constructor($filter, $rootScope) {
    'ngInject';
    this.$filter = $filter;
    this._posts = angular.copy(rawPost);
    this.$rootScope = $rootScope;
    
  }
  static get $inject() {
    return ['$filter', '$rootScope'];
  }
  
  getAllPosts() {
    return this._posts;
  }

  setPost(modifiedPost) {
    posts = modifiedPost;//save posts to DB
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
  getPostsSortedByRecentDate(posts) {
    posts
    .sort((b,a) => {
      return (a.date > b.date) ?
        1 :
        (
          (b.date > a.date) ? -1 : 0
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
    let replies = [];
    let newTopic = {
      'note': postText,
      'replies': replies
    };
    let postObj = {
      'date': postDate,
      'user': loggedInUser,
      'topic': newTopic
    };
    posts.push(postObj)//if saving to DB, need not to push, directly send only new post to save 
  }

  getPostByDate(selectedDate) {
    let selectedPost = [];
    let postArray = posts;
    for(let i = 0; i < postArray.length; i++) {
      if (postArray[i].date == Number(selectedDate)) {
        selectedPost = postArray[i];
        break;
      }
    }
    //sort by date first
    this.getPostsSortedByRecentDate(selectedPost.topic.replies);
    //assert corresponding days
    selectedPost.topic.replies.forEach(function(reply) {
      if (!reply.day)
      reply.day = this.$filter('date')(new Date(reply.date), 'MMM d, y');
    }, this);
    // sort by day
    this.getPostsSortedByRecentDay(selectedPost.topic.replies);
    return selectedPost;
  }
  addNewComment(postComment, loggedInUser, commentDate, selectedDate) {
    let commentObj = {
      date: commentDate,
      user: loggedInUser,
      comments: postComment
    };
    for(let i = 0; i < posts.length; i++) {
      if (posts[i].date == selectedDate) {
        posts[i].topic.replies.push(commentObj);
        break;
      }
    }
  }
}

export default postsService;