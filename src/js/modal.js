const editBtn = document.querySelectorAll(".editBtn");
const viewAdminModal = document.getElementById("viewAdminModal");
const editAdminModal = document.getElementById("editAdminModal");
editBtn.forEach((element) => {
  element.addEventListener("click", () => {
    editAdminModal.classList.remove("hidden");
    editAdminModal.classList.add("flex");
    viewAdminModal.classList.add("hidden");
  });
});

const toggleModal = (modal, action) => {
  modal.classList[action === "open" ? "remove" : "add"]("hidden");
  modal.classList[action === "open" ? "add" : "remove"]("flex");
};

export const openModal = (modalId) =>
  toggleModal(document.getElementById(modalId), "open");
export const closeModal = (modal) => toggleModal(modal, "close");

// 綁定事件
export function bindModalEvents(openBtnId, modalId) {
  document
    .getElementById(openBtnId)
    .addEventListener("click", () => openModal(modalId));

  document.querySelectorAll(".closeModalBtn").forEach((button) => {
    button.addEventListener("click", () =>
      closeModal(button.closest(".modal")),
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach((row, rowIndex) => {
    const id = rowIndex + 1;
    row.setAttribute("data-id", id);
    row
      .querySelectorAll("button.viewAdminBtn, button.editAdminBtn")
      .forEach((button) => {
        button.setAttribute("data-id", id);
      });
  });

  const handleButtonClick = (button) => {
    const modalIdPrefix = button.classList.contains("editAdminBtn")
      ? "edit"
      : "view";
    const row = button.closest("tr");
    const id = `#${row.getAttribute("data-id")}`;
    const name = row.children[1].textContent;
    const email = row.children[2].textContent;

    const idElement = document.getElementById(`${modalIdPrefix}AdminId`);
    const nameElement = document.getElementById(`${modalIdPrefix}AdminName`);
    const emailElement = document.getElementById(`${modalIdPrefix}AdminEmail`);

    if (idElement && nameElement && emailElement) {
      if (modalIdPrefix === "view") {
        idElement.textContent = id;
        nameElement.textContent = name;
        emailElement.textContent = email;
      } else {
        idElement.value = id;
        nameElement.value = name;
        emailElement.value = email;
      }
      openModal(`${modalIdPrefix}AdminModal`);
    } else {
      console.error(`Cannot find modal elements for prefix: ${modalIdPrefix}`);
    }
  };

  document
    .querySelectorAll("button.viewAdminBtn, button.editAdminBtn")
    .forEach((button) => {
      button.addEventListener("click", () => handleButtonClick(button));
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const hiddenDiv = document.getElementById("hiddenDiv");
  const toggleButton = document.querySelector(".toggleBtn");

  toggleButton.addEventListener("click", () => {
    const isHidden = hiddenDiv.classList.contains("max-h-0");
    hiddenDiv.classList.toggle("max-h-0", !isHidden);
    hiddenDiv.classList.toggle("opacity-0", !isHidden);
    hiddenDiv.classList.toggle("max-h-screen", isHidden);
    hiddenDiv.classList.toggle("opacity-100", isHidden);
  });
});
document.addEventListener("click", (event) => {
  ["newAdminModal", "editAdminModal"].forEach((modalId) => {
    const modal = document.getElementById(modalId);
    if (modal && !modal.contains(event.target)) {
      closeModal(modalId);
    }
  });
});
