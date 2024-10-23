import { observer } from "mobx-react-lite";

import { TaskItem, taskModel } from "root/entities/task/model";

export type TaskListProps = {
  categoryId: number;
  children: (value: TaskItem, index: number) => JSX.Element;
};

export const TaskList = observer(({ categoryId, children }: TaskListProps) => {
  const { tasks } = taskModel;

  const currentTasks = tasks[categoryId];

  return currentTasks ? currentTasks.map(children) : <></>;
});
