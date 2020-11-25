import Backbone from "backbone";

export interface IRoom {
  name: string;
  id?: number;
  selected?: boolean;
}

export default class Room extends Backbone.Model<IRoom> {
  url = () => "http://localhost:3000/room";

  select() {
    //@ts-ignore
    this.collection.setSelected(this);
  }

  toggle() {
    this.set("selected", !this.get("selected"));
  }
}
