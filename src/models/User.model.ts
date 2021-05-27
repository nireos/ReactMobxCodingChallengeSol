import { makeAutoObservable } from "mobx";

export default class UserModel {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    makeAutoObservable(this);
    this.name = name;
    this.age = age;
  }

  setName = (name: string) => {
    this.name = name;
  };
  setAge = (age: number) => {
    this.age = age;
  };

  getName = (): string => {
    return this.name;
  };

  getAge = (): number => {
    return this.age;
  };
}
