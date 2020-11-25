import Backbone from "backbone";
import Room from "src/model/Room";

export default class Rooms extends Backbone.Collection<Room> {
  private selectedRoom: Room;
  preinitialize() {
    this.model = Room;
  }

  constructor() {
    super();

    this.selectedRoom = undefined;
  }

  setSelected(room: Room) {
    if (this.selectedRoom) {
      this.selectedRoom.toggle();
    }
    this.selectedRoom = room;
    this.selectedRoom.toggle();
  }

  url = () => "http://localhost:3000/room";
}
