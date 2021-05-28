import { makeAutoObservable } from "mobx";

export default class UserModel {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    makeAutoObservable(this);
    this.name = name;
    this.age = age;
  }

  set Name(value: string) {
    this.name = value;
  }

  set Age(value: number) {
    this.age = value;
  }
  get Name(): string {
    return this.name;
  }

  get Age(): number {
    return this.age;
  }
}
