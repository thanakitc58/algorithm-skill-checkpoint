//ใช้ binary serach
function findProductPrice(products, name) {
  // Your code here
  let left = 0;
  let right = products.length - 1;
  while (left <= right) {
    //ประกาศตัวแปร mid เพื่อแบ่งครึ่ง
    let mid = Math.floor((left+right)/2)
    //ถ้าหาชื่อแล้วตรง
    if(products[mid].name === name){
      //ต้องการราคาตอน return เข้าถึง .price
      return products[mid].price
      //ถ้าชื่ออยู่ด้านขวา
    }else if (products[mid].name < name){
      left = mid + 1 
      //ถ้าชื่ออยู่ซ้าย
    }else{
      right = mid - 1
    }
  }
  return -1 
}

// Test case
// name ต้องเรียงถึงทำ binary search ได้
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
