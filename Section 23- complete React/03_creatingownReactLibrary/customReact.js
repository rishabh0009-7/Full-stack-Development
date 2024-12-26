//we are creating our own react library (bts of react js)
//  it might seem unnecessary to use JavaScript for something that HTML can already handle. However, the reason we build functions like customRender is to understand how frameworks like React work under the hood. Here's why this approach is meaningful:

// function customRender (reactElement,container){
//     const domElement=document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.Children
//     domElement.setAttribute('target',domElement.props.target)
//     container.appendChild(domElement)

// }

// 4
function customRender(reactElement, container) {
  // Create a DOM element based on the type
  const domElement = document.createElement(reactElement.type);

  // Set the properties (props) to the created DOM element
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Add content to the DOM element
  domElement.textContent = reactElement.Children; // Use `textContent` instead of `innerHTML` for safety

  // Append the created DOM element to the container
  container.appendChild(domElement);
}
//react mai h1>lorem aise nhi hota usme objects hi hota hai usme type  attributes  ye sa hota hai 
// 1React element-like object
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  Children: "Click me to visit Google", // Fixed typo for better readability
};

//2 Select the container element
const mainContent = document.querySelector("#root");

//3 Render the React-like element into the main content
customRender(reactElement, mainContent); // where do you want to inject and  what do you want to  inject
