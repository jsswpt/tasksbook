import { makeAutoObservable } from "mobx";

import { RequestStatus } from "root/shared/lib/api";

import { getTasksByCategoryIdReq } from "../api";

type TaskItem = {
  categoryId: number;
  id: number;
  title: string;
  isDone: boolean;
};

type TaskList = Record<number, Array<TaskItem>>;

class Task {
  private _tasks: TaskList = {};
  private _status: RequestStatus | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get tasks() {
    return this._tasks;
  }

  private set tasks(value) {
    this._tasks = value;
  }

  get status() {
    return this._status;
  }

  private set status(value) {
    this._status = value;
  }

  getTasksByCategoryId = (categoryId: number) => {
    if (this.tasks[categoryId]) {
      return;
    }

    this.status = "pending";

    getTasksByCategoryIdReq(categoryId)
      .then((res) => {
        this.tasks = {
          ...this.tasks,
          [categoryId]: res.map((item) => ({
            categoryId: item.category_id,
            id: item.id,
            isDone: item.isDone,
            title: item.title,
          })),
        };
      })
      .finally(() => {
        this.status = "done";
      });
  };
}

export const taskModel = new Task();
