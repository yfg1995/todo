import { Data } from "./data";
import { Task } from "./task";
import { createHTMLElement } from "./helpers";

export class Tasks {
  constructor({ wrapSelector, data }) {
    this.wrap = document.querySelector(wrapSelector);
    this.wrapSelector = wrapSelector;
    this.data = data;
    this.init();
  }

  createListHTML() {
    this.tasksList = createHTMLElement("ul", { className: "list" });
    this.wrap.appendChild(this.tasksList);
    this.renderTasks();
  }

  renderTasks() {
    this.tasksList.innerHTML = "";
    const tasks = this.data.getTasks();

    tasks.forEach((task) => {
      new Task({
        wrapSelector: ".list",
        inputNewValue: task.inputValue,
        data: this.data,
        id: task.id,
      });
    });
  }

  init() {
    this.createListHTML();
  }
}
