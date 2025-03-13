/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddNewDataUsersType } from "../firebase/addNewDataUser";
import { UserType } from "../UsersState";

export interface UserState {
  users: UserType[];
  updateNewUserField: any;
  addUser: (newUser: UserType) => void;
  setUser: (newUser: UserType[]) => void;
  addNewDataZustand: (email: string, newData: AddNewDataUsersType) => void;
  deleteDataUser: (email: string) => void;
}
