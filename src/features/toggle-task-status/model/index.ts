import { taskModel } from "root/entities/task";

class ToggleTaskStatus {
  constructor() {}

  toggle(id: number, categoryId: number) {
    // TODO: делать запрос
    taskModel.tasks = {
      ...taskModel.tasks,
      [categoryId]: taskModel.tasks[categoryId].map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    };
  }
}

export const toggleStatusModel = new ToggleTaskStatus();
