import { Data } from "./data";
import { createHTMLElement } from "./helpers";
import { Task } from "./task";

export class AddTask {
  constructor({ wrapSelector }) {
    this.wrap = document.querySelector(wrapSelector);
    this.wrapSelector = wrapSelector;
    this.data = new Data();
    this.init();
  }

  handleInputChange(e) {
    this.inputNewValue = e.target.value;
  }

  handleOnAdd() {
    this.button.addEventListener("click", () => {
      this.id = Date.now().toString();
      this.data.addTask({
        id: this.id,
        task: new Task({
          inputNewValue: this.inputNewValue,
          wrapSelector: ".list",
          data: this.data,
          id: this.id,
        }),
      });

      this.input.value = "";
      this.inputNewValue = "";
    });
  }

  createHTML() {
    this.container = createHTMLElement("div", { className: "add-header" });
    this.input = createHTMLElement("input", { className: "input" });
    this.button = createHTMLElement("button", {
      className: "add-button",
      textContent: "Add to List",
    });

    this.container.append(this.input, this.button);
    this.wrap.appendChild(this.container);
    this.input.addEventListener("change", (e) => this.handleInputChange(e));
  }

  init() {
    this.createHTML();
    this.handleOnAdd();
  }
}
