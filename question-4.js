function sortProductsByPrice(products) {
  // Your code here
  //ใช้ nasted loop หา buble sort
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length - 1; j++) {
      //น้อยไปมาก > แต่ต้องการมากไปน้อยให้ใช้ < 
        if (products[j].price > products[j + 1].price) {
          //ลืมวิธีเขียนเงื่อนไขสลับตำแหน่ง
              [products[j]] = [products[j + 1]];
          }
    }
    return products
  }
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
