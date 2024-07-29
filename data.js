export class Data {
  constructor() {
    this.tasksList = this.getTasksFromLocalStorage() || [];
  }

  addTask({ id, task }) {
    this.tasksList.push({ id, task });
    this.saveToLocalStorage();
  }

  deleteTask(id) {
    this.tasksList = this.tasksList.filter((task) => task.id !== id);
    this.saveToLocalStorage();
  }

  getTasks() {
    return this.tasksList;
  }

  saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasksList));
  }

  getTasksFromLocalStorage() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  }
}
