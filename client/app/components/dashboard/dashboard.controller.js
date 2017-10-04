class dashboardController {
    constructor($rootScope, $scope, $location, $window, loginService) {
      this.name = 'dashboard';
      this.$scope = $scope;
      this.$scope.username = $rootScope.username; 
      this.$scope.$location = $location;
      this.$scope.$window = $window;
      this.$scope.loginService = loginService;
      this.$scope.updateUserInfo = this.updateUserInfo;
      this.onReadyFn();
    }
    static get $inject() {
      return ['$rootScope', '$scope', '$location', '$window', 'loginService'];
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
    onReadyFn() {
      document.getElementById('j-home').classList.add('selected');
      document.getElementById('j-todo').classList.remove('selected');
      document.getElementById('j-post').classList.remove('selected');
      if (this.$scope && !this.$scope.user) {
        this.getUserInfo();
      }
      // document.click();
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