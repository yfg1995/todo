export class Data {
  constructor() {
    this.tasksList = this.getTasksFromStorage() || [];
  }

  addTask({ id, value }) {
    this.tasksList.push({ id, value });
    this.saveTasksToStorage();
  }

  deleteTask(id) {
    this.tasksList = this.tasksList.filter((task) => task.id !== id);
    this.saveTasksToStorage();
  }

  getTasks() {
    return this.tasksList.reverse();
  }

  saveTasksToStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasksList));
  }

  getTasksFromStorage() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  }
}
