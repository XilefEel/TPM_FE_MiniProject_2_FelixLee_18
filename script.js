const productsGrid = document.querySelector(".products-grid");
const addProductModal = document.querySelector(".add-product-modal");
const pageTitle = document.querySelector(".page-title");
const addButton = document.querySelector(".btn-primary");
const submitButton = document.querySelector(".form-actions .btn-primary");

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
