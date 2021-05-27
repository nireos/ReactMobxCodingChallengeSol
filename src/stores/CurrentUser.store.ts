import { makeAutoObservable } from "mobx";
import UserModel from "../models/User.model";

class CurrentUserStore {
  currentUser: UserModel = new UserModel("Tznonit", 40);

  constructor() {
    makeAutoObservable(this);
  }

  setName = (name: string) => {
    this.currentUser.setName(name);
  };

  setAge = (age: number) => {
    this.currentUser.setAge(age);
  };
}

const currentUserStore = new CurrentUserStore();

export default currentUserStore;
