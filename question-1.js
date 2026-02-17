//ใช้วิธีีแบบ linear serach

function findStudentById(students, id) {
  // Your code here
  for (let i = 0; i < students.length; i++) {
    //เราต้องเข้าถึง .id เพราะ execute ส่งข้อมูลเป็น id มา
    if(students[i].id === id){
      //โจทย์จะเอาข้อมูลทั้งหมดเลย return i ให้ทั้งหมด
      return students[i]
    }
  }
  //โจทย์กำหนดให้คืนค่าเป็น null หากไม่เจอ
  return null
}

// Test case
const students = [
  { id: 302, name: "Emily Carter" },
  { id: 105, name: "Michael Johnson" },
  { id: 501, name: "Sarah Wilson" },
  { id: 207, name: "Daniel Brown" },
  { id: 403, name: "Sophia Martinez" },
];

console.log(findStudentById(students, 302)); // Output: { id: 302, name: "Emily Carter" }
console.log(findStudentById(students, 4)); // Output: null
