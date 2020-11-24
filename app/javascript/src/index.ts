import Rooms from "./collection/Room";
import ChatView from "./view/ChatView";
import CreateRoomView from "./view/CreateRoomView";
import RoomsView from "./view/RoomsView";

export function main() {
  document.addEventListener("turbolinks:load", () => {
    const chatView = new ChatView();

    $("body").html(chatView.render().el);

    const rooms = new Rooms();

    rooms.fetch();

    $("body").append(new RoomsView({ rooms }).render().el);

    $("body").append(new CreateRoomView({ rooms }).render().el);
  });
}
