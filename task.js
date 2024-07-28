import { createHTMLElement } from "./helpers";

export class Task {
  constructor({ inputNewValue, wrapSelector }) {
    this.wrapSelector = document.querySelector(wrapSelector);
    this.inputNewValue = inputNewValue;
    this.createTaskHTML();
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

    this.wrapSelector.appendChild(this.task);
    this.task.append(this.taskText, this.taskButtonsCon);
    this.taskButtonsCon.append(this.editButton, this.deleteButton);
  }
}
