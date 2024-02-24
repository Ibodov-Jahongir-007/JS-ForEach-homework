//let users = ['Munir' , 'Jago' , 'Jaxon' , 'Javokhir' , 'MuhammadAli' , 'Shoxrux']
//users.forEach((user) => {
//    console.log(user + ' salam brat');
//})

//console.log(
//    users.forEach(el => el[0] === 'M'),
//    users.filter(el => el[0] === 'M'),
//    users.map(el => el[0] === 'M'),
//    users.find(el => el[0] === 'M')
//);
//penaldo


//
//numb.forEach((num) => { 
//    if(num % 2 === 0) {
//        console.log(`${num} this is even number`);
//    } else {
//       console.log( `${num} odd`);
//    }
//})
//let numb = [1,2,3,4,5]

//let total = 0

//numb.forEach((num) => total += num)

//console.log(total);

let arr = ['dsad',1,{},,null,[],12,12,'sda',true]
let str = 0
let num = 0
let others = 0

arr.forEach((elem) => {
    if(typeof elem === 'string') {
        str += 1
    }  else if(typeof elem === "number") {
        num += 1
    } else {
        others += 1
    }
})

console.log(str);
console.log(num);
console.log(others);



