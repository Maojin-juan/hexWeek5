export function addScrollHandler(modalId) {
  document.addEventListener("DOMContentLoaded", function () {
    const modalContent = document.querySelector(`#${modalId} .modal-content`);
    const modalHeader = document.querySelector(`#${modalId} .modalHeader`);

    if (modalContent && modalHeader) {
      modalContent.addEventListener("scroll", function () {
        if (modalContent.scrollTop > 0) {
          modalHeader.classList.add("border-b");
        } else {
          modalHeader.classList.remove("border-b");
        }
      });
    }
  });
}
