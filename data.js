export class Data {
  constructor() {
    this.tasksList = [];
  }

  addTask({ id, task }) {
    this.tasksList.push({ id, task });
  }

  deleteTask(id) {
    this.tasksList = this.tasksList.filter((task) => task.id !== id);
  }

  getTasks() {
    return this.tasksList;
  }
}
