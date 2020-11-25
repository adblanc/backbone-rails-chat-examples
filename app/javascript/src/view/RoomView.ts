import Backbone from "backbone";
import Room from "src/model/Room";

export default class RoomView extends Backbone.View<Room> {
  constructor(options?: Backbone.ViewOptions<Room>) {
    super(options);

    if (!this.model) {
      throw Error("Please provide a Room model.");
    }

    this.listenTo(this.model, "change", this.render);
  }

  events() {
    return {
      "click .room-name": this.onClick,
    };
  }

  onClick() {
    this.model.select();
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
