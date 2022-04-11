// const element = document.querySelector(".hot");
// console.log(element);

// element.className = "cool";

// const elements = document.querySelectorAll(".hot");
// console.log(elements.length);

// elements[1].className = "cool";

// const elements2 = document.querySelectorAll(".hot");
// console.log(elements2.length);

// const element = document.getElementById("liWithText3");
// console.log(element.nextElementSibling);

// element.previousElementSibling.className = "cool";
// element.nextElementSibling.className = "cool";

// const elements = document.getElementById("elements");
// console.log(elements.parentElement);

// elements.firstElementChild.className = "cool";
// elements.lastElementChild.className = "cool";

// const startItem = document.getElementsByTagName("ul")[0];
// console.log(startItem);

// const firstElement = startItem.firstElementChild;
// console.log(firstElement.textContent);
// firstElement.setAttribute("class", "cool");

// const lastElement = startItem.lastElementChild;
// console.log(lastElement.textContent);
// lastElement.setAttribute("class", "cool");

// const element = document.getElementById("liWithText3");
// console.log(element.firstElementChild.nextSibling.nodeValue);

// const element = document.getElementById("liWithText2");
// console.log(element.firstChild.nodeValue);

// let elText = element.firstChild.nodeValue;
// elText = elText.replace("text inside 2 li", "replaced text 2 li");
// element.firstChild.nodeValue = elText;

// const firstItem = document.getElementById("liWithText1");
// let itemContent = firstItem.innerHTML;
// console.log(itemContent);

// firstItem.innerHTML = "<a href='#'>" + itemContent + "</a>";

// const liElement = document.createElement("li");
// const text = document.createTextNode("text inside 7 li");
// liElement.appendChild(text);

// const elements = document.getElementById("elements");
// elements.appendChild(liElement);

// const removeEl = document.getElementsByTagName("li")[3];
// console.log(removeEl);

// const containerEl = removeEl.parentNode;
// console.log(containerEl);

// containerEl.removeChild(removeEl);

const element = document.getElementById("liWithText3");
if (element.hasAttribute("class")) {
  let attr = element.getAttribute("class");
  console.log(attr);

  let el = document.getElementById("attributeName");
  el.innerHTML = "<p>The 3 li item has a class name: " + attr + "</p>";
}
