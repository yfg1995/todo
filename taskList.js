import { AddTask } from "./addTask";
import { Data } from "./data";
import { Tasks } from "./tasks";

export class TaskList {
  constructor({ wrapSelector }) {
    this.wrapSelector = wrapSelector;
    this.init();
  }

  init() {
    new AddTask({ wrapSelector: this.wrapSelector });
    new Tasks({ wrapSelector: this.wrapSelector });
  }
}
