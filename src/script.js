const arr = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
  { name: "ayush", age: 21, profession: "admin" },
 
];

// 1. Print Developers
function printDeveloper() {
  for(let i = 0; i < arr.length; i++){
    if(arr[i].profession === "developer"){
      console.log(arr[i]);
    }
  }
}

// 2. Add Data
function addData() {
    let user_name = prompt("Enter Your Name","Ayush")
    let user_age = prompt("Enter Your age",21)
    let user_profession = prompt("Enter Your Proffession", "Devloper/Admin");
    arr.push({
      name:user_name.toString(),
      age:+user_age, // unary '+' operater used to convert string age into integer.
      profession:user_profession.toString(),
    });
    console.log(arr);
}

// 3. Remove Admins
function removeAdmin() {
  let idx = -1;
  for(let i = 0; i < arr.length; i++){
    if(arr[i].profession === "admin"){
      idx = i;
    }
  }
  if(idx != -1)arr.splice(idx,1);
  
  console.log(arr);
}

// 4. Concatenate Array
function concatenateArray() {
  
    let user_name = prompt("Enter Your Name","")
    let user_age = prompt("Enter Your age","")
    let user_profession = prompt("Enter Your Proffession","");
    let newArr = [ { name: user_name, age: +user_age, profession: user_profession }];
    const ans = arr.concat(newArr);
    console.log(ans);
}

// 5. Average Age
function averageAge() {
  let avg = 0;
  for(let i = 0; i < arr.length; i++){
    avg += arr[i].age;
  }
  console.log(avg/arr.length);
}

// 6. Age Check
function checkAgeAbove25() {
  for(let i = 0; i < arr.length; i++){
    if(arr[i].age > 25){
      console.log(arr[i]);
    }
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  let professionObject = {};
  for(let i = 0; i < arr.length; i++){
    if(professionObject[arr[i].profession] == undefined){
      professionObject[arr[i].profession] = 1;
    }else {
      professionObject[arr[i].profession]++;
    }
  }
  
  for(let key in professionObject){
   if(professionObject[key] == 1){
      console.log(key)
    }
  }
  return professionObject;
}

// 8. Sort by Age
function sortByAge() {
  arr.sort((a,b) => a.age - b.age
  );
  console.log(arr);
}

// 9. Update Profession
function updateJohnsProfession() {
  arr[0].profession = "Admin";
  console.log(arr[0]);
}

// 10. Profession Count
function getTotalProfessions() {
  let count = CountProfession();
  console.log(count);
  
}
// counting profession

function CountProfession() {
  let professionObject = {};
  for(let i = 0; i < arr.length; i++){
    if(professionObject[arr[i].profession] == undefined){
      professionObject[arr[i].profession] = 1;
    }else {
      professionObject[arr[i].profession]++;
    }
  }
  
  return Object.keys(professionObject).length;
}