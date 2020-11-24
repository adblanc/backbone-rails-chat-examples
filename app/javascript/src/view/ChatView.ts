import Backbone from "backbone";
import consumer from "channels/consumer";
import Messages from "src/collection/Messages";
import Message, { IMessage } from "src/model/Message";

export default class ChatView extends Backbone.View {
  room: ActionCable.Channel;
  messages: Messages;

  preinitialize() {
    this.messages = new Messages();

    this.room = consumer.subscriptions.create(
      { channel: "RoomChannel" },
      {
        connected() {
          console.log("connected");
        },
        received: (data: IMessage) => {
          this.messages.add(new Message({ content: data.content }));
        },
      }
    );
  }

  constructor() {
    super();

    this.listenTo(this.messages, "add", this.renderMsg);
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

      const message = new Message({ content });
      message.save();

      this.clearInput();
    }
  }

  clearInput() {
    this.$("#input-msg").val("");
  }

  renderMsg(message: Message) {
    this.$("#messages").append(`<div>${message.get("content")}</div>`);
  }

  render() {
    this.$el.html(
      "<div><div id='messages'> </div> <input id='input-msg' type='text'></div>"
    );

    return this;
  }
}
