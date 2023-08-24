console.log("Let's get to know the document!");

console.log(document);

let body = document.body;
console.log(body);

// Add CSS inline style via the .style property
body.style.backgroundColor = 'dodgerblue';


let children = body.children;
console.log(children);

let header = children[0];
console.log(header);

let navbar = header.children[0]
console.log(navbar);
// Change/Set the class of an element using its .className property
navbar.className = 'navbar bg-danger-subtle navbar-expand-lg'



// Popular methods with the document Object

// Document GET methods

// document.getElementById('id')
// return the first element with an id that matched the string 'id'
let homeElement = document.getElementById('home');
console.log(homeElement);


// document.getElementsByTagName('tagName')
// return an HTMLCollection (Arrary-like) of all elements that match 'tagName'
let allImages = document.getElementsByTagName('img');
console.log(allImages);

let allDivs = document.getElementsByTagName('div');
console.log(allDivs);


// document.getElementsByClassName('className')
let invisibleDivs = document.getElementsByClassName('is-invisible');
console.log(invisibleDivs);


// document.querySelector('selector')
// return the FIRST element that matches the specified 'selector'
let firstNavItem = document.querySelector('.nav-item') // simple selector
console.log(firstNavItem);

let middleBubble = document.querySelector('#outerBubble div'); // Combinator Selector - Descendant
console.log(middleBubble);


// document.querySelectorAll('selector')
// return a NodeList (Array-like) of elements that match the specified 'selector'
let navDivs = document.querySelectorAll('nav div'); // Combinator Selector - Descendant
console.log(navDivs);
