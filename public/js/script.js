const Modal = {
  open() {
    // Abrir o modal
    // Adicionar a class active ao modal

    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    // Fechar o modal
    // Remover a class active ao modal
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};
