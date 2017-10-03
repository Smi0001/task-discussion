/******Need to use HttpInterceptor
 *  to remove critical information from the response,
 *  currently it is shown in the browser
 *******/
class loginService {
  constructor($http, $q, $location, $window, $rootScope) {
    'ngInject';
    //INIT DEPENDENCIES
    this.$http = $http;
    this.$q = $q;
    this.$location = $location;
    this.$window = $window;
    this.$rootScope = $rootScope;

  }
  
  clearCredentials() {
    this.$window.sessionStorage.clear();
    this.$rootScope.isAlive = false;
    this.$rootScope.username = '';
    this.$location.path('/login');
  }
  setCredentials(username, sessionId) {
    this.$rootScope.isAlive = true;
    this.$rootScope.username = username;
    this.$window.sessionStorage.setItem('username', username);
    this.$window.sessionStorage.setItem('sessionId', sessionId);
  }

  login(params) {
    const defer = this.$q.defer();
    let res = {status: 401, data: {error: 'Username or password mismatch'}};
    this.$http.get('/app/data/credentialsDict.json')
    .then((response) => {
      if (response && response.status == 200 && response.data) {
        let credentials = response.data.credentials;
        for(let i=0; i < credentials.length; i++) {
          if (credentials[i].username == params.username && credentials[i].password == params.password) {
            res.data.username = credentials[i].username;
            res.data.sessionId = credentials[i].sessionid;
            res.status = 200;
            delete res.data.error;
            break;
          }
        }
        defer.resolve(res);
      }
    })
    .catch((response) => {
        defer.reject("Error 500");
    });
    return defer.promise;
  }

  getUserInfo(username) {
    const defer = this.$q.defer();
    let res = {status: 401, data: {error: 'User info not found'}};
    this.$http.get('/app/data/userInfo.json')
    .then((response) => {
      if (response && response.status == 200 && response.data) {
        let userInfo = response.data.userInfo;
        for(let i=0; i < userInfo.length; i++) {
          if (userInfo[i].username == username) {
            res.data.user = userInfo[i];
            res.status = 200;
            delete res.data.error;
            break;
          }
        }
        defer.resolve(res);
      }
    })
    .catch(() => {
        defer.reject("Error 500");
    });
    return defer.promise;
  }

  updateUserInfo(params) {
    //update user Info
    /*
    const defer = this.$q.defer();
    let res = {status: 401, data: {error: 'User info not found'}};
    this.$http.post('/app/data/userInfo.json', )
    .then((response) => {
      if (response && response.status == 200 && response.data) {
        let userInfo = response.data.userInfo;
        for(let i=0; i < userInfo.length; i++) {
          if (userInfo[i].username == username) {
            res.data.user = userInfo[i];
            res.status = 200;
            delete res.data.error;
            break;
          }
        }
        defer.resolve(res);
      }
    })
    .catch(() => {
        defer.reject("Error 500");
    });
    return defer.promise;
    */
  }
}

export default loginService;