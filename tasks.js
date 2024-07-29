import { Data } from "./data";
import { createHTMLElement } from "./helpers";

export class Tasks {
  constructor({ wrapSelector }) {
    this.wrap = document.querySelector(wrapSelector);
    this.wrapSelector = wrapSelector;
    this.data = new Data();
    this.init();
  }

  createListHTML() {
    this.tasksList = createHTMLElement("ul", { className: "list" });

    this.wrap.appendChild(this.tasksList);

    this.data.getTasks().forEach((task) => {
      this.tasksList.append(task.createListHTML());
    });
  }

  init() {
    this.createListHTML();
  }
}
