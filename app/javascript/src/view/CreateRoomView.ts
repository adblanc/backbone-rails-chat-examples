import Backbone from "backbone";
import Rooms from "src/collection/Rooms";
import Room from "src/model/Room";
import { ViewRoomsOptions } from "./RoomsView";

export default class CreateRoomView extends Backbone.View {
  constructor(options?: ViewRoomsOptions) {
    super(options);

    this.rooms = options.rooms;
  }

  rooms: Rooms;
  events() {
    return {
      "keypress #new-room": this.onKeyPress,
    };
  }

  onKeyPress(e: JQuery.Event) {
    if (e.key === "Enter") {
      e.preventDefault();
      const name = this.$("#new-room").val() as string;

      if (!name) {
        return;
      }

      const room = new Room({ name });
      room.save(
        {},
        {
          error: () => {
            this.rooms.remove(room); // Remove if server says no
          },
        }
      );

      this.rooms.add(room); // Optimistic UI

      this.clearInput();
    }
  }

  clearInput() {
    this.$("#new-room").val("");
  }

  render() {
    this.$el.html(
      `<label>Create a new room <div><input id='new-room' type='text'></div> </label>`
    );

    return this;
  }
}
