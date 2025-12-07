const productsGrid = document.querySelector(".products-grid");
const addProductModal = document.querySelector(".add-product-modal");
const editProductModal = document.querySelector(".edit-product-modal");
const pageTitle = document.querySelector(".page-title");
const addButton = document.querySelector(".btn-primary");
const submitButton = document.querySelector(".add-product-modal .btn-primary");
const editSubmitButton = document.querySelector(
  ".edit-product-modal .btn-primary"
);
const editButtons = document.querySelectorAll(
  ".icon-btn[aria-label='Edit product']"
);

addButton.addEventListener("click", () => {
  productsGrid.style.display = "none";
  addButton.style.display = "none";
  pageTitle.textContent = "Add Product";
  addProductModal.style.display = "flex";
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  productsGrid.style.display = "flex";
  addButton.style.display = "block";
  pageTitle.textContent = "Products";
  addProductModal.style.display = "none";
});

editButtons.forEach((button) => {
  button.addEventListener("click", () => {
    productsGrid.style.display = "none";
    addButton.style.display = "none";
    pageTitle.textContent = "Edit Product";
    editProductModal.style.display = "flex";
  });
});

editSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  productsGrid.style.display = "flex";
  addButton.style.display = "block";
  pageTitle.textContent = "Products";
  editProductModal.style.display = "none";
});
