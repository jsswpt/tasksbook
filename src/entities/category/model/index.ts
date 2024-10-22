import { makeAutoObservable } from "mobx";

import { RequestStatus } from "root/shared/lib/api";

import { getCategoriesReq } from "../api";

type CategoryItem = {
  id: number;
  title: string;
};

type Categories = Array<CategoryItem>;

class Category {
  private _categories: Categories | null = null;
  private _status: RequestStatus | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get categories() {
    return this._categories;
  }

  private set categories(value: Categories | null) {
    this._categories = value;
  }

  get status() {
    return this._status;
  }

  private set status(value: RequestStatus | null) {
    this._status = value;
  }

  getCategoriesOnLoad = () => {
    if (this.categories) return;

    this.status = "pending";
    getCategoriesReq()
      .then((res) => {
        this._categories = res;
      })
      .finally(() => {
        this.status = "done";
      });
  };
}

export const categoryModel = new Category();
