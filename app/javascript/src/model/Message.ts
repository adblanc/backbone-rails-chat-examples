import Backbone from "backbone";

export interface IMessage {
  content: string;
  room_id: number;
}

export default class Message extends Backbone.Model<IMessage> {
  url = () => "http://localhost:3000/room_messages";
}
