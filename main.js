import "./style.css";
import { TaskList } from "./taskList";

document.addEventListener("DOMContentLoaded", () => {
  const todoListWrapper = document.querySelector(".taskList");

  if (todoListWrapper) {
    new TaskList({ wrapSelector: ".taskList" });
  }
});
