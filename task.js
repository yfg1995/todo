import { Data } from "./data";
import { createHTMLElement } from "./helpers";

export class Task {
  constructor({ wrapSelector, inputNewValue, data, id }) {
    this.wrap = document.querySelector(wrapSelector);
    this.inputNewValue = inputNewValue;
    this.data = data;
    this.id = id;
    this.init();
  }

  removeTask() {
    this.deleteButton.addEventListener("click", () => {
      this.data.deleteTask(this.id);
      this.task.remove();
    });
  }

  createTaskHTML() {
    this.task = createHTMLElement("li", { className: "task" });

    this.taskText = createHTMLElement("span", {
      textContent: this.inputNewValue,
    });

    this.taskButtonsCon = createHTMLElement("div", {
      className: "task-buttons-con",
    });

    this.editButton = createHTMLElement("button", {
      className: "edit-button",
      textContent: "Edit",
    });

    this.deleteButton = createHTMLElement("button", {
      className: "delete-button",
      textContent: "X",
    });

    this.taskButtonsCon.append(this.editButton, this.deleteButton);
    this.task.append(this.taskText, this.taskButtonsCon);
    this.wrap.appendChild(this.task);
  }

  init() {
    this.createTaskHTML();
    this.removeTask();
  }
}
