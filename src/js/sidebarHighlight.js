// export function highlightSidebar() {
//   document.addEventListener("DOMContentLoaded", () => {
//     const currentPath = window.location.pathname;
//     console.log("Current Path:", currentPath); // 打印當前路徑以進行調試

//     const sidebarLinks = {
//       "/hexWeek5/": "assignmentPages",
//       "/hexWeek5/src/pages/index.html": "assignmentPages",
//       "/hexWeek5/src/pages/reply.html": "replyPages",
//       "/hexWeek5/src/pages/admin.html": "adminPages",
//     };

//     const activeLinkId = sidebarLinks[currentPath];
//     if (activeLinkId) {
//       document.getElementById(activeLinkId).classList.add("sidebarSelected");
//     }
//   });
// }
export function highlightSidebar() {
  document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    console.log("Current Path:", currentPath); // 打印當前路徑以進行調試

    const sidebarLinks = {
      "/hexWeek5/": "assignmentPages",
      "/hexWeek5/src/pages/index.html": "assignmentPages",
      "/hexWeek5/src/pages/reply.html": "assignmentPages",
      "/hexWeek5/src/pages/admin.html": "adminPages",
    };

    const activeLinkId = sidebarLinks[currentPath];
    console.log("Active Link ID:", activeLinkId); // 打印匹配的連結 ID 以進行調試

    if (activeLinkId) {
      const activeLinkElement = document.getElementById(activeLinkId);
      if (activeLinkElement) {
        activeLinkElement.classList.add("sidebarSelected");
        console.log(`Added 'sidebarSelected' class to ${activeLinkId}`);
      } else {
        console.error(`Element with ID ${activeLinkId} not found`);
      }
    } else {
      console.error("No matching link found for the current path");
    }
  });
}
