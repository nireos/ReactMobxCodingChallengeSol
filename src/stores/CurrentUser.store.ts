import UserModel from "../models/User.model";

class CurrentUserStore {
  currentUser: UserModel = new UserModel("Tznonit", 40);

  setName = (name: string) => {
    this.currentUser.Name = name;
  };

  setAge = (age: number) => {
    this.currentUser.Age = age;
  };
}

const currentUserStore = new CurrentUserStore();

export default currentUserStore;
