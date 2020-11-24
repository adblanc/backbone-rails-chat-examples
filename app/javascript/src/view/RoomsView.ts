import Backbone from "backbone";
import Rooms from "src/collection/Room";
import Message from "src/model/Message";
import Room from "src/model/Room";

export type ViewRoomsOptions = Backbone.ViewOptions & {
  rooms: Rooms;
};

export default class RoomsView extends Backbone.View {
  rooms: Rooms;
  constructor(options?: ViewRoomsOptions) {
    super(options);

    this.rooms = options.rooms;

    this.listenTo(this.rooms, "add", this.renderRoom);
    this.listenTo(this.rooms, "remove", this.removeRoom);
  }

  renderRoom(room: Room) {
    this.$("#rooms").append(
      `<div style="cursor: pointer;" id="room-${room.get("id")}">${room.get(
        "name"
      )}</div>`
    );
  }

  removeRoom(room: Room) {
    this.$(`#room-${room.get("id")}`).remove();
  }

  render() {
    this.$el.html(`<div id='rooms'> </div>`);

    return this;
  }
}
