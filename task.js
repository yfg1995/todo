import { createHTMLElement } from "./helpers";

export class Task {
  constructor({ wrapSelector, inputNewValue, data, id }) {
    this.wrap = document.querySelector(wrapSelector);
    this.inputNewValue = inputNewValue;
    this.data = data;
    this.isEditActive = false;
    this.id = id;
    this.init();
  }

  removeTask() {
    this.deleteButton.addEventListener("click", () => {
      this.data.deleteTask(this.id);
      this.task.remove();
    });
  }

  editTask() {
    this.saveButton.addEventListener("click", () => {
      const newValue = this.taskEditInput.value;

      this.data.editTask({ id: this.id, value: newValue });

      this.inputNewValue = newValue;

      this.toggleEdit();
    });
  }

  toggleEdit() {
    this.isEditActive = !this.isEditActive;
    this.createTaskHTML();
    this.init();
  }

  createTaskHTML() {
    this.wrap.innerHTML = "";
    this.task = createHTMLElement("li", { className: "task" });

    this.taskButtonsCon = createHTMLElement("div", {
      className: "task-buttons-con",
    });

    if (this.isEditActive) {
      this.taskEditInput = createHTMLElement("input", {
        className: "task-edit-input",
        id: "edit-input",
        value: this.inputNewValue,
        autofocus: true,
      });

      this.cancelButton = createHTMLElement("button", {
        className: "edit-buttons",
        textContent: "Cancel",
      });

      this.saveButton = createHTMLElement("button", {
        className: "edit-buttons",
        textContent: "Save",
      });

      this.taskButtonsCon.append(this.cancelButton, this.saveButton);
      this.task.append(this.taskEditInput, this.taskButtonsCon);
    } else {
      this.taskText = createHTMLElement("span", {
        textContent: this.inputNewValue,
      });

      this.editButton = createHTMLElement("button", {
        className: "edit-buttons",
        textContent: "Edit",
      });

      this.deleteButton = createHTMLElement("button", {
        className: "delete-button",
        textContent: "X",
      });

      this.taskButtonsCon.append(this.editButton, this.deleteButton);
      this.task.append(this.taskText, this.taskButtonsCon);
    }

    this.wrap.appendChild(this.task);

    this.editButton.addEventListener("click", () => this.toggleEdit());
    this.cancelButton.addEventListener("click", () => this.toggleEdit());
  }

  init() {
    this.createTaskHTML();
    this.removeTask();
    this.editTask();
  }
}
