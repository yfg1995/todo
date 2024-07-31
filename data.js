export class Data {
  constructor() {
    this.tasksList = this.getTasksFromStorage();
  }

  addTask({ id, value }) {
    this.tasksList.push({ id, value });
    this.setTasksToStorage();
  }

  editTask({ id, value }) {
    const taskIndexValue = this.tasksList.findIndex((task) => task.id === id);

    if (taskIndexValue !== -1) {
      this.tasksList[taskIndexValue] = { id, value };
      this.setTasksToStorage();
    }
  }

  deleteTask(id) {
    this.tasksList = this.tasksList.filter((task) => task.id !== id);
    this.setTasksToStorage();
  }

  getTasks() {
    return this.tasksList.reverse();
  }

  setTasksToStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasksList));
  }

  getTasksFromStorage() {
    const tasks = localStorage.getItem("tasks");

    return tasks ? JSON.parse(tasks) : [];
  }
}
