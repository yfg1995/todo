import { createHTMLElement } from "./helpers";
import { Task } from "./task";

export class TaskList {
  constructor({ wrapSelector }) {
    this.wrapSelector = wrapSelector;
    this.wrap = document.querySelector(wrapSelector);
    this.tasks = [];
    this.init();
  }

  handleInputChange(e) {
    this.inputNewValue = e.target.value;
  }

  handleOnAdd() {
    this.button.addEventListener("click", () => {
      this.tasks.push(
        new Task({
          inputNewValue: this.inputNewValue,
          wrapSelector: ".list",
        })
      );
    });
  }

  createHTML() {
    this.container = createHTMLElement("div", { className: "add-header" });
    this.input = createHTMLElement("input", { className: "input" });
    this.button = createHTMLElement("button", {
      className: "add-button",
      textContent: "Add to List",
    });
    this.list = createHTMLElement("ul", { className: "list" });

    this.wrap.append(this.container, this.list);
    this.container.append(this.input, this.button);

    this.input.addEventListener("change", (e) => this.handleInputChange(e));
  }

  init() {
    this.createHTML();
    this.handleOnAdd();
  }
}
