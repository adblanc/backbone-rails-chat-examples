import Rooms from "./collection/Rooms";
import ChatView from "./view/ChatView";
import CreateRoomView from "./view/CreateRoomView";
import RoomsView from "./view/RoomsView";
import UserView from "./view/UserView";

export function main() {
  document.addEventListener("turbolinks:load", () => {
    const rooms = new Rooms();
    rooms.fetch();

    const roomsView = new RoomsView({ rooms });
    const chatView = new ChatView({ rooms });

    $("body").append(new UserView().render().el);
    $("body").append(chatView.render().el);

    $("body").append(roomsView.render().el);

    $("body").append(new CreateRoomView({ rooms }).render().el);
  });
}
