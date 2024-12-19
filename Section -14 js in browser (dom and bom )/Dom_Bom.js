// bom--> browser object model 
// in console 
window.outerHeight
window.outerWidth
navigator.userAgent
location.hostname
location.href


// dom --> document object model
//.queryselector, .get 
// example 1
// dont use arrow function in dom becoz it always point towards global  whereas function focus on current context 
// use both of them check console u will know 
// document
//   .getElementById("changeTextButton")
//   .addEventListener("click", function () {
//     let paragraph = document.getElementById("myParagraph");
//     paragraph.textContent = "the paragraph is changed";
//   });

//   example 2
// document.getElementById("highlightFirstCity").addEventListener("click", function(){
//     let citiesList = document.getElementById("citiesList")
//     citiesList.firstElementChild.classList.add("highlight")
//     // console.log(citiesList.firstElementChild);
    
// })

// example 3
// document.getElementById("changeOrder").addEventListener("click",function(){
//     let coffeeType = document.getElementById("coffeeType");
//     coffeeType.textContent = "Espresso"
//     // we can aslo add css using dom
//     // coffeeType.style.padding = "5px"
// })


// example 4
// document.getElementById("addNewItem").addEventListener("click", function(){
//     // pehle list create karna padegi tabhi add kar paayenge 
//     let newItem = document.createElement('li')
//     newItem.textContent = "eggs"
//     document.getElementById("shoppingList").appendChild(newItem)
// })


// example 5
// document.getElementById("removeLastTask").addEventListener("click", function(){
//     let taskList =document.getElementById("taskList");
//     taskList.lastChild.remove()
// })

// example 6
// document.getElementById("clickMeButton").addEventListener("dblclick", function(){
//     alert("chaicode")
// })

// example 7--> event delegation meaning agar sabko same id di hai to kisi sirf ek ko kaise select kara without changing html
// document.getElementById("teaList").addEventListener("click", function (event) {
//   if (event.target && event.target.matches(".teaItem")){
//     alert("you selected:" + event.target.textContent);
//   }
    
// });


// example 8  form handling
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
   event.preventDefault() //it will prevent default behaviour of form that is sumbit
  });
  let feedback = document.getElementById("feedbackInput").value // isse kya hoga ki jo bhi value hum daalega bvo save ho jaayegi 
  console.log(feedback);
  document.getElementById("feedbackDisplay").textContent = `feedback is ${feedback}`


//   example 9 : dom content loadded --> null walaa erro se bachna ke lioye hota hai isse kya hota hai ki 
//Ensures your script runs as soon as the DOM is ready.

document.addEventListener('DOMContentLoaded',function(){
   document.getElementById("domStatus").textContent = "dom fully loaded " 
})


// example 10

document.getElementById("toggleHighlight").addEventListener("click", function(){
    let descriptionText = document.getElementById("descriptionText")
    descriptionText.classList.toggle("highlight")
})


// The classList property in the DOM provides a simple way to work with the classes assigned to an element. It represents a collection of all the class names applied to an element and allows you to easily manipulate them (add, remove, toggle, etc.) without directly modifying the className property.



  
//In JavaScript, querySelector is a method used to select the first element within a document that matches a specified CSS selector. It allows you to access and manipulate HTML elements in a more flexible and powerful way compared to older methods like getElementById or getElementsByClassName.

// in js  when you open html collection in console its a node list not an array  so we cannot use array methods on it. first convert it into array then use array methods on it