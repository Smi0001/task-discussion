/******Need to use HttpInterceptor
 *  to remove critical information from the response,
 *  currently it is shown in the browser
 *******/
class loginService {
  constructor($http, $q, $location, $window, $rootScope) {
    'ngInject';
    //INIT DEPENDENCIES
    this.SESSION_TIMEOUT_MINUTES = 30;
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
    let loggedInUser = {
      'username': username,
      'sessionId': sessionId,
      'timeStamp': Number(new Date())
    };
    this.$window.sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
  }
  getUserNameFromSession() {
    let username;
    let loggedInUser = this.$window.sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      loggedInUser = JSON.parse(loggedInUser);
      username = loggedInUser.username;
    }
    return username;
  }
  getTimeStampFromSession() {
    let timeStamp;
    var loggedInUser = this.$window.sessionStorage.getItem('loggedInUser');
     if (loggedInUser) {
      loggedInUser = JSON.parse(loggedInUser);
      timeStamp = loggedInUser.timeStamp;
     }
    return timeStamp;
  }
  isSessionTimeOut() {
    this.$rootScope.redirectingUrl = this.$location.path();
    let timeout = false;
    let timeStamp = this.getTimeStampFromSession();
    if (timeStamp) {
      let expiration = new Date(timeStamp);
      expiration.setMinutes(expiration.getMinutes() + this.SESSION_TIMEOUT_MINUTES);
      let currentTime = new Date();
      if (currentTime.getTime() > expiration.getTime()) {
        this.$window.sessionStorage.clear();
        timeout = true;
      }
    } else {
      timeout = true;
    }
    return timeout;
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
/*
  getUserInfo() {
    const defer = this.$q.defer();
    let username = this.getUserNameFromSession();
    if (username) {
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
        console.log('Error 500, during getUserInfo()');
          defer.reject("Error 500");
      });

    } else {
      defer.reject("Error 500");
      console.log('username h  hi nhi session me');
    }
    return defer.promise;
  }
*/
  setUserInScopeFromSession(_scope) {
    let username = this.getUserNameFromSession();
    if (username) {
      let res = {status: 401, data: {error: 'User info not found'}};
      this.$http.get('/app/data/userInfo.json')
      .then((response) => {
        if (response && response.status == 200 && response.data) {
          let userInfo = response.data.userInfo;
          for(let i=0; i < userInfo.length; i++) {
            if (userInfo[i].username == username) {
              _scope.user = userInfo[i];
              document.getElementById('j-userName').textContent = _scope.user.fname;
              this.$rootScope.redirectingUrl = null;//here it is confirmed that page is redirected
              break;
            }
          }
        } else {
          console.log('this should be unreachable code');
          this.$location.path('/login'); 
        }
      });
    }
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