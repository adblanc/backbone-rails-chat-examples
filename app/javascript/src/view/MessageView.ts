import Backbone from "backbone";
import _ from "underscore";

import Message from "src/model/Message";

export default class MessageView extends Backbone.View<Message> {
  constructor(options?: Backbone.ViewOptions) {
    super(options);

    if (!this.model) {
      throw Error("Please provide a Message model.");
    }
  }

  render() {
    const template = _.template($("#message-template").html());
    console.log(this.model.toJSON());
    this.$el.html(template(this.model.toJSON()));

    return this;
  }
}
