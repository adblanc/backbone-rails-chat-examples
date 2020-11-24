import ChatView from "./view/ChatView";

export function main() {
  document.addEventListener("turbolinks:load", () => {
    const chatView = new ChatView();

    $("body").html(chatView.render().el);
  });
}
