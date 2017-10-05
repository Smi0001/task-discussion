class avatarController {
    constructor($scope) {
      this.name = 'avatar';
      this.$scope = $scope;
      this.$scope.userimage = this.userimage;
      this.$scope.username = this.username;
      this.$scope.userfname = this.userfname;
      this.$scope.userlname = this.userlname;

      this.$scope.personName = this.setPersonName();
    }
    static get $inject() {
      return ['$scope'];
    }
    
    setPersonName() {
      let _scope = this;
      let personName;
      if (_scope.userfname || _scope.userlname)
        personName = _scope.userfname + ' ' + _scope.userlname;
      else if (_scope.username)
        personName = _scope.username;
      return personName;
    }
    
  }

  export default avatarController;