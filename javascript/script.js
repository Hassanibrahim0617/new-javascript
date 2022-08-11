// document.getElementById("demo"). textContent = " Hi, World!";

// alert("Welcome to my javasript tutorial!");

// let mood = prompt ("how are you");
// console.log ("mood");

// Addtion = (a, b) => {
//     a =5;
//     b =12;
//     return a + b
// };
// Addtion();

// function addition (c, d) {
//     c = 7;
//     d = 4;
//     return c + d;
// }
// addition();

// let fruit ="Apple, Banana, Kiwi";
// let part = fruit.slice (7, 13);

// let text1 = "Hello" ;
// let text2 = "World!";
// let text3 = text.concat("", text2);

// let welcomeEl = document.getElementById("welcome-el")
//     let name = "Ibrahim Hassan"
//     let greeting = "welcomes you to my javascript"

//     welcomeEl.innerText = name.concat(" "+ greeting)
//     welcomeEl.innerText += "👋"




// console.log(welcomeEl)

// let countEl = document.getElementById("count-el")
// console.log(countEl)

// let count = 0
// function increment(){
//     count += 1
//     countEl.innerText = count
// }

// function save(){
//     console.log(count)
// }

// let saveEl = document.getElementById("save-el")
// console.log(saveEl)

// function save(){
//   let calculate = count + "-"

//   saveEl.innerText += calculate
//   console.log(count)
// }

let myGreeting = document.getElementById("greetings")
console.log(myGreeting)
 let tag = "👋 hello from"
 let name = "bugzbunny!"
 myGreeting.innerText = tag.concat(" " + name);
 
 let myHeading = document.getElementById("number")
 console.log(myHeading)

 let count = 0
 console.log(count)
 function attendance(){
    count += 1
     myHeading.innerText = count
 };

 let myStore = document.getElementById("store")
 console.log(myStore)

 function record(){
    console.log(count)
 };

 let conclusion = document.getElementById("entry-save")
  console.log(conclusion)

  function record(){
     let total = count + "/"
     conclusion.innerText += total
     console.log(count)
  }