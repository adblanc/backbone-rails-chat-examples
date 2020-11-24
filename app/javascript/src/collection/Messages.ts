import Backbone from "backbone";
import Message from "src/model/Message";

export default class Messages extends Backbone.Collection {
  preinitialize() {
    this.model = Message;
  }
}
