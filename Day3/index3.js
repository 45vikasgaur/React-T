// console.log("----welcome to javascript----");

// console.log("-----starting with variables-----", c);

// const a= 5;
// let b= 6;
// var c=7;    

// console.log("a: , b: , c: ", + a + b + c);
// // console.log("a:", a);
// console.log(" ---sum--- : "+ a + b + c);

// console.log(" ---if else statment---");

// const marks=40;

// if(marks>=40){
//     console.log("Pass");
// }else{
//     console.log("Fail");
// }


// const a1= 100;
// const x= 66;
// const y= 8;
// const z= 67;
// if(x>y && x>z){
//   console.log("x");

// }else if(y>x && y>z){
//   console.log("y");

// }else if(z>x && z>y){
//   console.log("z");
// }else{
//   console.log("a1");
// }




// if(x>y){
//     console.log("x");
// }else if(y>z) {
//   console.log("y");
// }else if(z>x){
//   console.log("z");
// }else{
//   console.log("a1");
// }





// console.log("-----for loop-----");

// let sum=0;

//  for(let i=0; i<10; i++){
//     sum =sum+ i;
     
    // if(i %2===0){
    //     console.log("Even: ", i);
    // }
//     else{
//         console.log("Odd: ", i);
//     }
    
// }
// console.log("sum: ", sum);


// console.log("----while loop----");

// let n=10;
// sum1 =0;
// while(n> 0){
//     sum1 = sum1 + n;
//     console.log(n);
//     n--;
//     n=n-1;
    // if(i %2===0){
    //     console.log("Even: ", i);
    // }else{
    //     console.log("Odd: ", i);
    // }
// }
// console.log("sum1:", sum1);




// console.log("-----Arrays-----");


// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// console.log("first value : ", arr[4]);

// for(let i=arr.length-1; i>=0; i--){
//     console.log(arr[i]);

// }



// console.log("-----add new  element at given index-----");

// arr.splice(4, 0, 7);
// console.log(arr);

// console.log("-----remove element at given index-----");

// arr.splice(4,0,1);
// console.log(arr);


//  replace all 5 with 3 eg [35675] => 
// [36875]
// reverse the array [ 1,2,3 , 4,] = [4, 3. 2. 1]

 
// console.log("-----Objects-----");

// const obj = {
//     name: "vikas",
//     rollno: 249076,
//     result: "panding",
// };

// console.log(obj);
// console.log("name :", obj["name"]);//object data handling through key 




// console.log("-----add new key in object-----");
// obj.id = 2;
// console.log(obj);

// console.log("-----remeove key in object-----");

// delete obj.id;
// console.log(obj);



// const Data = [
//     { name: "vikas", rollno: 249076, result: "panding"},
//     { name: "Rohit", rollno: 249076, result: "panding"},
//     { name: "sachin", rollno: 249076, result: "panding"},
//     { name: "rahul", rollno: 249076, result: "panding"},
//     { name: "anuj", rollno: 249076, result: "panding"},
// ];

// for(let i=0; i<Data.length; i++){
//     const element = Data[i];
//     console.log("name: ", element.name);
// }

// for(let i=0; i<Data.length; i++){
//     const myObj = Data2[i];
//     const newObjItem = {};
//     newObjItem.name = myObj?.name?.common;
//     newObjItem.ccn3= myObj?.ccn3;
//     objArr.push(newObjItem);
// }
// console.log();

// const d = {
//     name: "vikas",
//     tld: tld[0],
//     independent: false,
//     capital: "King Edward Point",

// }
// console.log(data);


//  console.log("-----for each loop-----");

//  const arr2 = [ 1, 2, 3, 4, 5, 6, 7];

//  const myfun = (element ) => {
//     console.log(element);
//  }

const arr=[];
  for (i = 0; i!= data.length; i++){
      const obj = {};
      obj.name = data[i].name.common;
      obj.capital = data[i].capital;
      obj.independent = data[i].independent;
      arr.push(obj);
  }
    console.table(arr);