import Backbone from "backbone";
import Message from "src/model/Message";

export default class MessageView extends Backbone.View<Message> {
  constructor(options?: Backbone.ViewOptions) {
    super(options);

    if (!this.model) {
      throw Error("Please provide a Message model.");
    }
  }

  render() {
    this.$el.html(`<span>${this.model.get("content")}</span>`);

    return this;
  }
}
