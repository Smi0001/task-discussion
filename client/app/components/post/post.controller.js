
class postController {
  constructor($scope, postsService, $filter, $sce, loginService, $window) {
      this.name = 'post';
      this.$scope = $scope;
      this.$scope.postsService = postsService;
      // this.$scope.postArray = this.$scope.postsService.getAllPosts();
      this.$scope.postDateWiseMap = this.$scope.postsService.getPostsDateWise();
      this.$scope.postList = Array.from(this.$scope.postDateWiseMap);
      this.$scope.setDay = this.setDay;
      this.$scope.aaj = $filter('date')(new Date(), 'MMM d, y');
      this.$scope.kal = $filter('date')(new Date().setDate(new Date().getDate() - 1), 'MMM d, y');
      this.$scope.$sce = $sce;
      this.$scope.trustAsHtml = this.trustAsHtml;
      this.$scope.searchPost = this.searchPost;
      this.$scope.addNewPost = this.addNewPost;
      this.$scope.cancelPost = this.cancelPost;
      this.$scope.savePost = this.savePost;
      this.$scope.loginService = loginService;
      this.$scope.$window = $window;
      this.onReadyFn();
    }
    static get $inject() {
      return ['$scope', 'postsService', '$filter', '$sce',
       'loginService', '$window'];
    }
    onReadyFn() {
      document.getElementById('j-home').classList.remove('selected');
      document.getElementById('j-todo').classList.remove('selected');
      document.getElementById('j-post').classList.add('selected');
      if (this.$scope && !this.$scope.user) {
        this.getUserInfo();
      }
    }
    getUserInfo() {
      var _scope = this.$scope;
      // console.log('getUserInfo', _scope);
      var username = _scope.$window.sessionStorage.getItem('username');
      _scope.loginService.getUserInfo(username)
      .then((response) => {
        // console.log(response);
        if(response && response.status == 200) {
          _scope.user = response.data.user;
          document.getElementById('j-userName').textContent = _scope.user.fname;
        } else {
          _scope.loginService.ClearCredentials();
          _scope.error = response.data.error;
        }
      });
    }

    trustAsHtml(html) {
      return this.$sce.trustAsHtml(html);
    }
    searchPost() {
      console.log(this.search, this.postArray);
    }
    addNewPost() {
      let _scope = this;
      let avatar = document.querySelector('#j-modal .j-avatar');
      //empty previous mess
      avatar.innerHTML = "";
      let postText = document.querySelector('#j-modal textarea');
      postText.value = ""
      //create image & name div to append
      let _img = document.createElement('img');
      _img.src = _scope.user.avatar;
      _img.className = 'user-img';
      avatar.appendChild(_img);
      let _div = document.createElement('div');
      _div.className = 'name';
      _div.textContent = _scope.user.fname + ' ' + _scope.user.lname;
      avatar.appendChild(_div);
      document.getElementById('j-modal').style.display = 'block';
      document.getElementById('j-overlay').style.display = 'block';
      postText.focus();
    }

    cancelPost() {
      document.getElementById('j-modal').style.display = 'none';
      document.getElementById('j-overlay').style.display = 'none';
    }
    savePost() {
      let _scope = this;
      let postText = _scope.postText;
      if (postText) {
        _scope.postsService.addNewPost(postText, _scope.user, Number(new Date()));
        _scope.postDateWiseMap = _scope.postsService.getPostsDateWise();
        _scope.postList = Array.from(_scope.postDateWiseMap);
        _scope.cancelPost();
      }
    }

  }

export default postController;