import todoList from '../../data/tasks';

let counter = 0;

class todolistService {
  constructor() {
    'ngInject';
  }
  getAll() {
    todoList.forEach(function(element) {
      element.id = counter++;
    }, this);
    return todoList;
  };
  toggleChecked(id) {
    todoList.forEach(function(element) {
      if (element.id == id) {
        element.checked = element.checked? false: true;
      }
    }, this);
  }
  addNote(taskObj) {
    taskObj.id = counter++;
    taskObj.checked = false;
    todoList.unshift(taskObj);
  }
}
export default todolistService;