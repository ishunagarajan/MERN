let array=[2,4,5,6,7,8,9]
let arr2=[90,91,92,93,94]
let arrCopy=[...array,...arr2]
console.log(arrCopy);

let user={name:"user" ,age:20}
let address={city:"CBE",country:"India"}
let info={...user,...address}
console.log(info);