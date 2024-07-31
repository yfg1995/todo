import { createHTMLElement } from "./helpers";

export class AddTask {
  constructor({ wrapSelector, data, onTaskAdded }) {
    this.wrap = document.querySelector(wrapSelector);
    this.data = data;
    this.onTaskAdded = onTaskAdded;
    this.inputNewValue = "";
    this.init();
  }

  handleInputChange(e) {
    this.inputNewValue = e.target.value;
  }

  handleOnAdd() {
    this.button.addEventListener("click", () => {
      if (this.inputNewValue !== "") {
        const taskData = {
          id: Date.now().toString(),
          value: this.inputNewValue,
        };

        this.data.addTask(taskData);

        this.input.value = "";

        if (this.onTaskAdded) {
          this.onTaskAdded();
        }
      }
    });
  }

  createHTML() {
    this.container = createHTMLElement("div", { className: "add-header" });

    this.input = createHTMLElement("input", {
      className: "add-task-input",
      id: "add-input",
    });

    this.button = createHTMLElement("button", {
      className: "add-button",
      textContent: "Add to List",
    });

    this.input.addEventListener("input", (e) => this.handleInputChange(e));

    this.container.append(this.input, this.button);
    this.wrap.appendChild(this.container);
  }

  init() {
    this.createHTML();
    this.handleOnAdd();
  }
}
