import Backbone from "backbone";

export interface IRoom {
  name: string;
  id?: number;
}

export default class Room extends Backbone.Model<IRoom> {
  url = () => "http://localhost:3000/room";
}
