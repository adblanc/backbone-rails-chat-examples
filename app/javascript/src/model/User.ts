import Backbone from "backbone";

export interface IUser {
  username: string;
  id?: number;
  created_at?: string;
  updated_at?: string;
}

export default class User extends Backbone.Model<IUser> {
  url = () => "http://localhost:3000/user";
}
