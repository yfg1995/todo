import { createHTMLElement } from "./helpers";
import { Task } from "./task";

export class AddTask {
  constructor({ wrapSelector, data }) {
    this.wrap = document.querySelector(wrapSelector);
    this.wrapSelector = wrapSelector;
    this.data = data;
    this.init();
  }

  // handleInputChange(e) {
  //   this.inputNewValue = e.target.value;
  // }

  handleOnAdd() {
    this.button.addEventListener("click", () => {
      if (this.input.value !== "") {
        this.id = Date.now().toString();
        const taskData = {
          id: this.id,
          inputNewValue: this.input.value,
        };

        this.data.addTask(taskData);

        new Task({
          inputNewValue: this.input.value,
          wrapSelector: ".list",
          data: this.data,
          id: this.id,
        });

        this.input.value = "";
      }
    });
  }

  createHTML() {
    this.container = createHTMLElement("div", { className: "add-header" });
    this.input = createHTMLElement("input", { className: "input" });
    this.button = createHTMLElement("button", {
      className: "add-button",
      textContent: "Add to List",
    });

    // this.input.addEventListener("change", (e) => this.handleInputChange(e));

    this.container.append(this.input, this.button);
    this.wrap.appendChild(this.container);
  }

  init() {
    this.createHTML();
    this.handleOnAdd();
  }
}
