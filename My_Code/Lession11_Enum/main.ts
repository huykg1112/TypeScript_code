/*    +tương tự const
      +Có thể nhóm lại
*/ 


enum AIP_STATUS{///neu không gán gián trị con các phần tử bên trong thì nó
//       tự gán giá trị của moi phần tử từ 1->n phần ử
      
      PENDDING="PENDDING", FULFILLED="FULFILLED",REJECTED="REJECTED"//ĐÂY LÀ 3 GIÁ TRỊ TRẢ VỀ CỦA API
}
let a1 =AIP_STATUS.PENDDING;
let a2 = AIP_STATUS.FULFILLED;
// "PENDDING" => AIP_STATUS.PENDDING;

console.log()