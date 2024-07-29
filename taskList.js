import { Data } from "./data";
import { AddTask } from "./addTask";
import { Tasks } from "./tasks";

export class TaskList {
  constructor({ wrapSelector }) {
    this.wrapSelector = wrapSelector;
    this.data = new Data();
    this.init();
  }

  init() {
    new AddTask({ wrapSelector: this.wrapSelector, data: this.data });

    new Tasks({ wrapSelector: this.wrapSelector, data: this.data });
  }
}
