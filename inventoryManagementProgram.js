// Inventory Management Program

// 1️⃣ Declare an empty inventory array
let inventory = [];

// 2️⃣ Function to find product index (case-insensitive)
function findProductIndex(productName) {
  productName = productName.toLowerCase();
  return inventory.findIndex(item => item.name === productName);
}

// 3️⃣ Function to add a product or update existing quantity
function addProduct(product) {
  product.name = product.name.toLowerCase();
  const index = findProductIndex(product.name);

  if (index !== -1) {
    // Product exists → update quantity
    inventory[index].quantity += product.quantity;
    console.log(`${product.name} quantity updated`);
  } else {
    // New product → add to inventory
    inventory.push(product);
    console.log(`${product.name} added to inventory`);
  }
}

// 4️⃣ Function to remove product or update quantity
function removeProduct(productName, quantity) {
  productName = productName.toLowerCase();
  const index = findProductIndex(productName);

  if (index === -1) {
    console.log(`${productName} not found`);
    return;
  }

  const product = inventory[index];

  if (product.quantity < quantity) {
    console.log(`Not enough ${productName} available, remaining pieces: ${product.quantity}`);
  } else {
    product.quantity -= quantity;

    if (product.quantity === 0) {
      // Remove product completely
      inventory.splice(index, 1);
      console.log(`Remaining ${productName} pieces: 0`);
    } else {
      console.log(`Remaining ${productName} pieces: ${product.quantity}`);
    }
  }
}

// 5️⃣ Example usage (You can modify this section to test)
addProduct({ name: "Apple", quantity: 10 });
addProduct({ name: "apple", quantity: 5 });
addProduct({ name: "Banana", quantity: 8 });

removeProduct("apple", 8);
removeProduct("apple", 10);
removeProduct("banana", 2);
removeProduct("mango", 3);

// 6️⃣ Display the final inventory
console.log("Final Inventory:", inventory);
