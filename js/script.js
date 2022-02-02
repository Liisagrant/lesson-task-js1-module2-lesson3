
//Question 1

//const btn = document.querySelector(".btn");

//btn.addEventListener("click", () => {
 //   console.log("I'm a button");
//});



// Question 2
// Add a click event using `addEventListener` to the second button.
// In the event's function, display the character count from the input in the `b.count` element.
// Make sure to remove all trailing and leading spaces (spaces at the beginning and end of the input's value).

const message = document.querySelector("input[type=text]");
const btn2 = document.querySelector("button[type=button]");
const charCount = document.querySelector("b.count");


const myMessage = function (event) {
    console.log(event.target.value.length);
    const len = event.target.value.length;
    charCount.innerHTML = message.value.length;
};

btn2.addEventListener("click", myMessage);







