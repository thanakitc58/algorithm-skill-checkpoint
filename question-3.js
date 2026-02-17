/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: O(n) เราต้องการตรวจสอบข้อมูลทีละตัว เช่นในโจทย์ ให้มา 5 ตัวในกรณีที่แย่ที่สุดเราต้องเช็คทุกตัวจนเจอค่าที่เราต้องการหาก ค่านั้นอยู่ลำดับสุดท้าย

*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: O(log n ) การค้นหาแบบนี้จะเป็นการแบ่งข้อมูลครึ่งนึงทุกครั้งก่อนหาแต่จะสามารถใช้กับข้อมูลที่เรียงแล้วเท่านั้น


*/

/* 
Which function is more efficient and why?
Answer:ฟังก์ชันที่เร็วกว่าคือฟังก์ชัน findProductPrice เพราะสมมุติ โจทย์ให้หาค่าอะไรสักอย่าง 1000 ชิ้น linear จะทำการค้นหาที่ละชิ้นโดยใช้ O(n) กรณีที่แย่ที่สุดคือหา 1000 รอบ
แต่ binary serach จะทำการหารครึ่งแล้วหา ในทีนี้ กรณีที่แย่ที่สุดคือหาไม่เกิน 10 รอบ ตามหลัก log2 1000 = 10 รอบ


*/
