import { makeAutoObservable } from "mobx";

import { authorizeOnLoadReq } from "../api/authorize-on-load";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  nickName: string;
  avatar?: string;
};

type Status = "pending" | "done";

class Session {
  private _user: User | null = null;
  private _isAuth = false;
  private _error: string | null = null;
  private _status: Status | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get isAuth() {
    return this._isAuth;
  }

  private set isAuth(value) {
    this._isAuth = value;
  }

  get status() {
    return this._status;
  }

  private set status(value: Status | null) {
    this._status = value;
  }

  get error() {
    return this._error;
  }

  private set error(value: string | null) {
    this._error = value;
  }

  get user() {
    return this._user;
  }

  private set user(value: User | null) {
    if (JSON.stringify(this.user) !== JSON.stringify(value)) {
      this._user = value;
    }

    this.isAuth = !!value;
  }

  authorizeOnLoad = () => {
    this.status = "pending";

    authorizeOnLoadReq()
      .then(
        ({ avatar, first_name, id, last_name, nick_name }) => {
          this.user = {
            avatar: avatar,
            firstName: first_name,
            id: id,
            lastName: last_name,
            nickName: nick_name,
          };
        },
        (error: Error) => {
          this.error = error.message;
        },
      )
      .finally(() => {
        this.status = "done";
      });
  };
}

export const sessionModel = new Session();
