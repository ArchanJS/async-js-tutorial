// settimeout

// ex:1

// console.log("hi1");
// setTimeout(()=>{
//     console.log("Arghyajyoti");
// },3000)
// console.log("hi2");

// ex: 2

// setTimeout(()=>{
//     console.log("Arghyajyoti");
// },3000)
// setTimeout(()=>{
//     console.log("Random");
// },2000)
// setTimeout(()=>{
//     console.log("Archan");
// },2000)

// console.log("hi")

// map

// write code to square each element of the array arr

// let arr=[1,2,3,4,5];
// using for
// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i]*arr[i];
// }

// using forEach
// arr.forEach((e,i)=>{
//     arr[i]=e*e;
// })

//using map
// arr=arr.map((e)=>e*e);
// console.log(arr);

// filter

// let arr=[1,2,3,4,5];

// let a2=[];

// using forEach
// arr.forEach((e)=>{
//   if(e>=3) a2.push(e);
// })

// using filter

// let a2=arr.filter(e=>e>=3);

// console.log(a2);

// setInterval

// let i=0;
// const id=setInterval(()=>{
//   i++; // 1, 2, 3
//   console.log("arghyajyoti");
//   if(i === 3) clearInterval(id);
// },2000);

// diff between == & === in js

// console.log(2=='2'); // checks value only
// console.log(2==='2'); // checks value as well as datatype

// callback hell

// function f1(phone){
//   // searching the user by phone
//   function f2(id){
//     // fetching posts by userid
//     function f3(postId){
//       // returns comments to each post
//       function f4(commentId){
//         // return no. of likes & dislikes to each comment
//         function f5(likeId){
//           // fetch user's details by likeid
//         }
//       }
//     }
//   }
// }

// promise
// pending state: when we wait for the response
// failed state: when promise is rejected
// fulfilled state: when promise is fulfilled
// const p1=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     let val=Math.random();
//     if(2 > 0.5) return resolve(`Promise p1 has been resolved with value: ${val}`);
//     else return reject(`Promise p1 has been rejected with value: ${val}`)
//   }, 3000)
// })

// const p2=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     let val=Math.random();
//     if(0.1 > 0.5) return resolve(`Promise p2 has been resolved with value: ${val}`);
//     else return reject(`Promise p2 has been rejected with value: ${val}`)
//   }, 2000)
// })

// we want promise p2 be executed only if p1 is fulfilled

// p1.then((res)=>{
//   console.log(res);
//   p2.then((res)=>{
//     console.log(res);
//   }).catch((err)=>{
//     console.log("inside p2 catch block: ", err);
//   })
// }).catch((err)=>{
//   console.log("inside p1 catch block: ", err);
// })
// Promise.all([p1,p2]).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })


// async-await

// const p1=()=>{
//     return new Promise((resolve,reject)=>{
//     let val=Math.random();
//     if(val>0.5) return resolve('P1 Resolved with value: '+val);
//     else return reject(new Error('P1 Rejected with value: '+val))
// })
// }

// const p2=()=>{
//     return new Promise((resolve,reject)=>{
//     let val=Math.random();
//     if(val>0.5) return resolve('P2 Resolved with value: '+val);
//     else return reject(new Error('P2 Rejected with value: '+val))
// })
// }

// const func1=async(p1,p2)=>{
//   try {
//     const res1= await p1;
//     console.log(res1);
//     const res2= await p2;
//     console.log(res2);
//   } catch (err) {
//     console.log(err); 
//   }
// }

// func1(p1,p2);


// without object destructuring

// const obj = require('./moduleex');

// console.log(obj.add(2,3));
// console.log(obj.serv1);

// with object distructuring

const {add, serv1} = require('./moduleex');

console.log(add(2,3));
console.log(serv1);