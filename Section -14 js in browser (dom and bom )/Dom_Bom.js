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
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
  });

//   example 2
document.getElementById("highlightFirstCity").addEventListener("click", function(){
    let citiesList = document.getElementById("citiesList")
    citiesList.firstElementChild.classList.add("highlight")
    // console.log(citiesList.firstElementChild);
    
})

// example 3
document.getElementById("changeOrder").addEventListener("click",function(){
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso"
    // we can aslo add css using dom
    // coffeeType.style.padding = "5px"
})


// example 4
document.getElementById("addNewItem").addEventListener("click", function(){
    // pehle list create karna padegi tabhi add kar paayenge 
    let newItem = document.createElement('li')
    newItem.textContent = "eggs"
    document.getElementById("shoppingList").appendChild(newItem)
})


// example 5
document.getElementById("removeLastTask").addEventListener("click", function(){
    let taskList =document.getElementById("taskList");
    taskList.lastChild.remove()
})