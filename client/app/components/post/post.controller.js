
class postController {
  constructor($scope, postsService, $filter, $sce, $timeout) {
      this.name = 'post';
      this.postsService = postsService;
      this.$scope = $scope;
      this.$scope.postDateWiseMap = this.postsService.getPostsDateWise();
      this.$scope.postList = Array.from(this.$scope.postDateWiseMap)
      console.log(this.$scope.postList);
      this.$scope.setDay = this.setDay;
      this.$scope.aaj = $filter('date')(new Date(), 'MMM d, y');
      this.$scope.kal = $filter('date')(new Date().setDate(new Date().getDate() - 1), 'MMM d, y');
      this.$scope.$sce = $sce;
      this.$scope.trustAsHtml = this.trustAsHtml;
      this.$scope.searchPost = this.searchPost;
      this.$scope.addNewPost = this.addNewPost;
      this.$scope.cancelPost = this.cancelPost;
      this.$scope.savePost = this.savePost;
      this.$scope.$timeout = $timeout;
    }
    static get $inject() {
      return ['$scope', 'postsService', '$filter', '$sce', '$timeout'];
    }
    
    trustAsHtml(html) {
      return this.$sce.trustAsHtml(html);
    }
    searchPost(_event) {
      if (_event)
      var target = _event.target;
    }
    addNewPost() {
      //some more stuff
      var _scope = this;
      // this.$timeout (function() {
        let user = {loggedInUser : 'Smi', userImg: 'app/data/img/user0.png'};
        _scope.user = user;
        let avatar = document.querySelector('#j-modal .j-avatar');
        //empty previous mess
        avatar.innerHTML = "";
        let postText = document.querySelector('#j-modal textarea');
        postText.value = ""
        //create image & name div to append
        let _img = document.createElement('img');
        _img.src = _scope.user.userImg;
        avatar.appendChild(_img);
        let _div = document.createElement('div');
        _div.className = 'name';
        _div.textContent = _scope.user.loggedInUser;
        avatar.appendChild(_div);
        document.getElementById('j-modal').style.display = 'block';
        document.getElementById('j-overlay').style.display = 'block';
        postText.focus();
        console.log('focus');
      // });
    }
    cancelPost() {
      document.getElementById('j-modal').style.display = 'none';
      document.getElementById('j-overlay').style.display = 'none';
    }
    savePost() {

    this.cancelPost();
    }
  }

export default postController;