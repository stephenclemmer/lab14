/* global Product, Cart */

'use strict';

const cartItems = document.getElementById('catalog'); 
cartItems.addEventListener("submit", handleSubmit);

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the product options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //DONE: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let optionElem = document.createElement('option');
    optionElem.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionElem);

    // console.log(optionElem)

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // DONE: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// ************************
// function populateForm() {

//   const selectElement = document.getElementById('items');
//   for (let i in Product.allProducts) {
//     let optionElem = document.createElement('option');
//     optionElem.textContent = Product.allProducts[i].name;
//     selectElement.appendChild(optionElem);
//   }
// }
// *************************
// ___________________________

// 1. Add item
// 2. Add Quantity
// 3. Push add to cart button - have event listener hear the pushed add to cart button.
// 4. have the event handler push the items and quanitity into an array to hold the cart data
// 5. clear the data from the catalog page
// 6. Display the item and quanitity onto the cart page

// ___________________________


// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {

  let items = document.getElementById('items').value;
  let quantity = document.getElementById('quantity').value;
  
  cart.addItem(items, quantity);
  new Cart.push(addSelectedItemToCart());
  
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart


}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() { }

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
