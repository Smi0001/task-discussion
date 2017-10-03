class todoController {
  constructor($scope, todoService) {
    this.name = 'todo';
    this.todoService = todoService;
    this.$scope = $scope;
    this.$scope.todoList = this.todoService.getAll();
    this.$scope.toggleChecked = this.todoService.toggleChecked;
    this.$scope.addNote = this.todoService.addNote;
    this.$scope.addNoteOnEnter = this.addNoteOnEnter;
    this.$scope.filterTodo = this.filterTodo;
    this.$scope.resetFilter = this.resetFilter;
    this.$scope.toggleSelection = this.toggleSelection;
      // console.log('constructor', this);
  }
  static get $inject() {
    return ['$scope', 'todoService'];
  }
  addNoteOnEnter(_event) {
    var controller_scope = this;
    if (_event.keyCode == 13) {
      console.log('enter pressed', controller_scope);
      var task = _event.target.value;
      var taskObj = {note: task};
      controller_scope.addNote(taskObj);
      _event.target.value = '';
    }
  }
  filterTodo(type) {
    var controller_scope = this;
    controller_scope.todoList.forEach(function(element) {
      if (type == 'active') {
        element.active = false; //show active
        if (element.checked == true)
          element.completed = true; //hide completed
      }  else if (type == 'completed') {
        if (element.checked == false)
          element.active = true;//hide active
        element.completed = false;//show completed
      }  
    }, this);
  }
  resetFilter() {
    var controller_scope = this;
    controller_scope.todoList.forEach(function(element) {
      element.active = false;//show active
      element.completed = false;//show completed
    }, this);
  }
  toggleSelection(_event) {
    var arr = document.getElementsByClassName('j-filter');
    for (var i=0; i < arr.length; i++) {
      arr[i].classList.remove('selected');
    }
    var target = _event.target;
    target.classList.add('selected');
  }

}

export default todoController;