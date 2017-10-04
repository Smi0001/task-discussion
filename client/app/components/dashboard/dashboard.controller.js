class dashboardController {
    constructor($rootScope, $scope, $location, loginService) {
      this.name = 'dashboard';
      this.$scope = $scope;
      this.$scope.username = $rootScope.username; 
      this.$scope.$location = $location;
      this.$scope.loginService = loginService;
      this.$scope.updateUserInfo = this.updateUserInfo;
      this.onReadyFn();
    }
    static get $inject() {
      return ['$rootScope', '$scope', '$location', 'loginService'];
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
      document.getElementById('j-home').classList.add('selected');
      document.getElementById('j-todo').classList.remove('selected');
      document.getElementById('j-post').classList.remove('selected');
      if (this.$scope && !this.$scope.user) {
        this.handleUserSession();
      }
    }
    //update user info
    updateUserInfo() {
      var _scope = this.$scope;
      var params = {username: this.username};
      if (this.fname) params.fname = this.fname;
      if (this.lname) params.lname = this.lname;
      if (this.email) params.email = this.email;
      if (this.contact) params.contact = this.contact;
      if (this.avatar) params.avatar = this.avatar;
      if (this.address) params.address = this.address;
      this.loginService.updateUserInfo(params);// pending
    }

}
export default dashboardController;