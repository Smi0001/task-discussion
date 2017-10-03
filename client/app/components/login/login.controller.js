class loginController {
    constructor($scope, $window, loginService, $location) {
      this.name = 'login';
      this.$scope = $scope;
      this.$scope.loginService = loginService;
      this.$scope.logout = this.logout;
      this.$scope.logout();
      this.$scope.login = this.login;
      this.$scope.$location = $location;
    }
    static get $inject() {
      return ['$scope', '$window', 'loginService', '$location'];
    }
    logout() {
      this.loginService.clearCredentials();
    }

    login() {
      var _scope = this;
      _scope.error = null;
      let credentials = {username: _scope.username, password: _scope.password};
      _scope.loginService.login(credentials).then(function(response) {
        if(response && response.status == 200) {
            _scope.loginService.setCredentials(response.data.username, response.data.sessionId);
            _scope.$location.path('/dashboard');
          } else {
            _scope.error = response.data.error;
          }
        }).catch(function(res) {
            if (res.status == "401") {
                _scope.loginService.ClearCredentials();
            }
        });
      }
    }
  export default loginController;