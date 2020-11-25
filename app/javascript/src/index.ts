import Rooms from "./collection/Rooms";
import ChatView from "./view/ChatView";
import CreateRoomView from "./view/CreateRoomView";
import RoomsView from "./view/RoomsView";
import UserView from "./view/UserView";

export function main() {
  document.addEventListener("turbolinks:load", () => {
    const chatView = new ChatView();

    $("body").html(chatView.render().el);

    const rooms = new Rooms();

    rooms.fetch();

    $("body").prepend(new UserView().render().el);

    $("body").append(new RoomsView({ rooms }).render().el);

    $("body").append(new CreateRoomView({ rooms }).render().el);
  });
}
