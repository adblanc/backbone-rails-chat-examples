import Backbone from "backbone";
import consumer from "channels/consumer";
import Message, { IMessage } from "src/model/Message";
import Room from "src/model/Room";
import MessageView from "./MessageView";

export default class RoomView extends Backbone.View<Room> {
  channel: ActionCable.Channel;
  constructor(options?: Backbone.ViewOptions<Room>) {
    super(options);

    if (!this.model) {
      throw Error("Please provide a Room model.");
    }

    this.listenTo(this.model, "change", this.render);
    this.listenTo(this.model.messages, "add", this.renderMsg);
  }

  events() {
    return {
      "click .room-name": this.onClick,
    };
  }

  onClick() {
    if (!this.model.get("selected")) {
      $("#messages").html("");
      this.model.select();
    }
  }

  renderMsg(message: Message) {
    $("#messages").append(new MessageView({ model: message }).render().el);
  }

  render() {
    const selected = this.model.get("selected");
    this.$el.html(
      `<div style="cursor: pointer; ${
        selected ? "text-decoration: underline;" : ""
      }" class="room-name" id="room-${this.model.get("id")}">${this.model.get(
        "name"
      )}</div>`
    );

    return this;
  }
}
