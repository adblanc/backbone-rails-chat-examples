import Backbone from "backbone";
import Room from "src/model/Room";

export default class Rooms extends Backbone.Collection {
  preinitialize() {
    this.model = Room;
  }

  url = () => "http://localhost:3000/room";
}
