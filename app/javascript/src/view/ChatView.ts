import Backbone from "backbone";
import Messages from "src/collection/Messages";
import Rooms from "src/collection/Rooms";
import Message from "src/model/Message";
import { ViewRoomsOptions } from "./RoomsView";

export default class ChatView extends Backbone.View {
  room: ActionCable.Channel | undefined;
  room_id: number;
  rooms: Rooms;
  messages: Messages;

  preinitialize() {
    this.messages = new Messages();
  }

  constructor(options: ViewRoomsOptions) {
    super(options);

    this.rooms = options.rooms;
  }

  events() {
    return {
      "keypress #input-msg": this.onKeyPress,
    };
  }

  onKeyPress(e: JQuery.Event) {
    if (e.key === "Enter") {
      e.preventDefault();
      const content = this.$("#input-msg").val() as string;

      if (!content) {
        return;
      }

      const message = new Message({
        content,
        room_id: this.rooms.selectedRoom.get("id"),
      });
      message.save();

      this.clearInput();
    }
  }

  clearInput() {
    this.$("#input-msg").val("");
  }

  render() {
    this.$el.html(
      "<div><div id='messages'> </div><label><input id='input-msg' placeholder='Send a message' type='text'></div>"
    );

    return this;
  }
}
