import "./assets/style/tailwind.css";
import { highlightSidebar } from "./js/sidebarHighlight.js";
import { bindModalEvents } from "./js/modal";
import { addScrollHandler } from "./js/scrollHandler";

highlightSidebar();
// 綁定modal事件
bindModalEvents("newAdminBtn", "newAdminModal");

["newAdminModal", "editAdminModal"].forEach(addScrollHandler);
