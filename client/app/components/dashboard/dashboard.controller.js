class dashboardController {
    constructor($scope, $location) {
      this.name = 'dashboard';
      this.$scope = $scope;
    }
    static get $inject() {
      return ['$scope'];
    }

  

  }
export default dashboardController;