import Backbone from "backbone";

export interface IMessage {
  content: string;
}

export default class Message extends Backbone.Model<IMessage> {
  url = () => "http://localhost:3000/message";
}
