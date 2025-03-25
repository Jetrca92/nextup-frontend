import { UserType } from "./auth";

export type UserActivityType = {
  id: string;
  createdAt: string;
  userId: string;
  action: UserActionType;
  componentType?: ComponentType;
  newValue?: string;
  location: string;
  user: UserType;
};

export enum UserActionType {
  CLICK = "CLICK",
  SCROLL = "SCROLL",
  ADD_VALUE = "ADD_VALUE",
  CHANGE_VALUE = "CHANGE_VALUE",
  REMOVE_VALUE = "REMOVE_VALUE",
}

export enum ComponentType {
  LINK = "LINK",
  BUTTON = "BUTTON",
  INPUT = "INPUT",
  DROPDOWN = "DROPDOWN",
  CHECKBOX = "CHECKBOX",
  RADIO = "RADIO",
  NONE = "NONE",
}
