/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { UserType } from "../../entities/UsersState";
import { UserState } from "../../entities/zustand/useCreateUsers";
import { AddNewDataUsersType } from "../../entities/firebase/addNewDataUser";

export const useCreateUsers = create<UserState>((set: any) => ({
  users: [],
  updateNewUserField: (field: any, value: any) =>
    set((state: { newUser: any }) => ({
      newUser: {
        ...state.newUser,
        [field]: value,
      },
    })),
  addUser: (newUser: UserType) =>
    set((state: { users: UserType[] }) => ({
      users: [...state.users, newUser],
    })),
  setUser: (newUser: UserType[]) =>
    set(() => ({
      users: [...newUser],
    })),
  addNewDataZustand: (email: string, userAdicionales: AddNewDataUsersType) =>
    set((state: UserState) => ({
      users: state.users.map((user) =>
        user.email === email ? { ...user, ...userAdicionales } : user
      ),
    })),
  deleteDataUser: (email: string) =>
    set((state: UserState) => ({
      users: state.users.filter((user) => user.email !== email),
    })),
}));
