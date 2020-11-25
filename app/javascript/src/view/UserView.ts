import Backbone from "backbone";
import User from "src/model/User";

export default class UserView extends Backbone.View<User> {
  constructor(options?: Backbone.ViewOptions) {
    super(options);

    this.model = new User();

    this.model.fetch();

    this.listenTo(this.model, "change", this.render);
  }

  render() {
    this.$el.html(`<span>Hello ${this.model.get("username") || ""}</span>`);

    return this;
  }
}
