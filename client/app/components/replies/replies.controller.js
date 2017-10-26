class repliesController {
    constructor($scope, $attrs, postsService, $filter, $sce, loginService) {
      this.name = 'replies';
      this.$scope = $scope;
      this.$scope.selectedDate = $attrs.selecteddate;
      this.$scope.isSearchPost = $attrs.issearchpost == 'true'? true : false;
      this.$scope.postsService = postsService;
      this.$scope.postArray = this.$scope.postsService.getPostByDate(this.$scope.selectedDate);
      this.$scope.replies = this.$scope.postArray.topic.replies;
      this.$scope.trustAsHtml = this.trustAsHtml;
      this.$scope.filterDate = this.filterDate;
      this.$scope.aaj = $filter('date')(new Date(), 'MMM d, y');
      this.$scope.kal = $filter('date')(new Date().setDate(new Date().getDate() - 1), 'MMM d, y');
      this.$scope.$sce = $sce;
      this.$scope.postComment = '';
      this.$scope.addCommentOnEnter = this.addCommentOnEnter;
      this.$scope.loginService = loginService;
      this.onReadyFn();
    }
    static get $inject() {
      return ['$scope', '$attrs', 'postsService', '$filter', '$sce', 'loginService'];
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
      if (this.$scope && !this.$scope.user) {
        this.handleUserSession();
      }
    }
    filterDate(date) {
      let _scope = this;
      return _scope.postsService.filterDate(date);
    }
    trustAsHtml(html) {
      return this.$sce.trustAsHtml(html);
    }
    addCommentOnEnter(_event) {
      if (_event.keyCode == 13) {
        let _scope = this;
        if (_scope.postComment) {
          _scope.postsService.addNewComment(_scope.postComment, _scope.user, Number(new Date()), _scope.selectedDate);
          _scope.postArray = _scope.postsService.getPostByDate(_scope.selectedDate);
          _scope.postComment = '';
        }
      }
    }
  }

  export default repliesController;