class repliesController {
    constructor($scope, $attrs, postsService) {
      this.name = 'replies';
      this.$scope = $scope;
      this.$scope.selectedDate = $attrs.selecteddate;
      this.$scope.postArray = postsService.getPostByDate(this.$scope.selectedDate);
    }
    static get $inject() {
      return ['$scope', '$attrs', 'postsService'];
    }
  }

  export default repliesController;