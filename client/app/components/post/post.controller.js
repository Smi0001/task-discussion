
class postController {
  constructor($scope, postsService, $filter, $sce,
     loginService, $location, $timeout, $compile) {
      this.name = 'post';
      this.$scope = $scope;
      this.$scope.postsService = postsService;
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
      this.$scope.$location = $location;
      this.$scope.showComments = this.showComments;
      this.$scope.closeCommentModal = this.closeCommentModal;
      this.$scope.$timeout = $timeout;
      this.$scope.$compile = $compile;
      this.onReadyFn();
    }
    static get $inject() {
      return ['$scope', 'postsService', '$filter', '$sce',
       'loginService', '$location', '$timeout', '$compile'];
    }

    handleUserSession() {
      var _scope = this.$scope;
      if (_scope.loginService.isSessionTimeOut()) {
        _scope.$location.path('/login');
      } else {
        _scope.loginService.setUserInScopeFromSession(_scope);
      }
    }
    onReadyFn() {
      document.getElementById('j-home').classList.remove('selected');
      document.getElementById('j-todo').classList.remove('selected');
      document.getElementById('j-post').classList.add('selected');
      if (this.$scope && !this.$scope.user) {
        this.handleUserSession();
      }
    }

    trustAsHtml(html) {
      return this.$sce.trustAsHtml(html);
    }
    searchPost() {
      console.log(this.search, this.postArray);
    }
    addNewPost() {
      let postText = document.querySelector('#j-modal textarea');
      postText.value = ""
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

    closeCommentModal() {
      document.getElementById('j-comment-modal').style.display = 'none';
      document.getElementById('j-overlay').style.display = 'none';
    }
    showComments(selectedDate) {
      let _scope = this;
      let newScope = _scope.$new(true, _scope);
      newScope.selectedDate = selectedDate;
      let html = '<replies selecteddate="' + selectedDate + '"></replies>';
      let element = document.getElementById('j-current-topics');
      element.innerHTML = "";
      element.append(_scope.$compile(html)(newScope)[0]);
      let postComment = document.querySelector('#j-comment-modal input');
      postComment.value = ""
      document.getElementById('j-comment-modal').style.display = 'block';
      document.getElementById('j-overlay').style.display = 'block';
      postComment.focus();
    }
  }

export default postController;