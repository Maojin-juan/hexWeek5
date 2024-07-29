import "./assets/style/tailwind.css";
import { bindModalEvents } from "./js/modal";
import { addScrollHandler } from "./js/scrollHandler";

// 綁定modal事件
bindModalEvents("newAdminBtn", "newAdminModal");

["newAdminModal", "editAdminModal"].forEach(addScrollHandler);
