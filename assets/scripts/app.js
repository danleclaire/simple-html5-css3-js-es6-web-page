// Author: Dan Leclaire
// Created on: Dec. 15, 2020
// For basic understanding of JavaScript in action 

// The double forward slashes at the begining of
// the lines with text, are used to add comments
// in the code. Furthermore, these lines are not
// considered by JavaScript.

// Please note that the comments herein are meant
// to explain the intrecacies involved in developing a 
// basic single page website which simply demonstrate
// JavaScipt in action when attached to 
// HTML/CSS scripts. 
// Prior knowledge of HTML and CSS
// is required before trying to comprehend JavaScript.

// The purpose of this JS code is to show a modal popUp
// window with a clickable backdrop with 75% alpha black
// which will also serve to close the popUp upon clicking
// anywhere on the backdrop.
// The modal popUp is to show additional information on certain
// JavaScript terminology, shown as links in the first paragraph
// of the index.html page.
// Despite being able to close the popUp window by clicking on the
// backdrop, the popUp window also include a close button within
// the msg box with the caption "Got it!". 
// That's all she wrotes.

// Firt, we need to acquire some information from the DOM, (which
// actually is the index.html file).

// We need to store the "backdrop" element (which is an empty
// <div> tag in the index.html file) into the 
// backdropElement variable.
const backdropElement = document.getElementById('backdrop');

// Then we need to store all the tags with class attribute
// of .info-popup (found on the index.html file) into the
// modalLinkElements variable.
// There are two of those tags in the file.
const modalLinkElements = document.querySelectorAll('.info-popup');

// Here, we declare a variable to be used further down.
let popupModal;

// This function reaches the backdrop ID in the CSS file and
// toggles (or switches) between visible and display: none
// Used to show or hide the modal pupUp window.
function toggleBackdrop() {
  backdropElement.classList.toggle('visible');
}

// This function is triggered from a click event placed on
// the anchor link <a> in the HTML document, also called the "DOM".
// Its purpose is to show the modal pupUp window with the appropriate
// additional information about the JavaScript main features.
function showInfoPopUpModal(event) {
  // The msg variable stores the data-text from either links
  // appearing on the index.html page. The links are found in the first
  // paragraph of the first section on the HTML page.
  const msg = event.target.dataset.text;

  // This is a function call to toggle (switch) the visibility
  // of the backdrop.
  toggleBackdrop();

  // The following 2 lines of code, creates the complete
  // set of PopUp Modal window html elements, on the fly. Meaning
  // programmatically or dynamically as they do not pre-exist on
  // the HTML page. The second line adds an existing css class
  // to the "div" called, 'modal'.
  popUpModal = document.createElement('div');
  popUpModal.classList.add('modal');

  // The following 3 lines of code creates the inner html elements
  // within the 'div' element, actually.
  // Note that what looks like apostrophe are not. They are
  // what we call, back ticks. You can find this key
  // under the tilde ~ sign located on the top far left
  // of most keyboards.
  // Back-ticks are used in JavaScript to construct string
  // characters where spaces and line returns are not ignore
  // as it is with "" or ''. This type of string concatenation
  // is called "Template Literal" in JavaScript. 
  popUpModal.innerHTML = `
    <h2>Modal PopUp Window</h2>
    <p>${msg}</p>
  `;

  // The following 3 lines of code creates the button, 
  // the event listener for the button, and creates a
  // caption text for the button.
  const closeBtn = document.createElement('button');
  closeBtn.addEventListener('click', hideInfoPopUpModal);
  closeBtn.textContent = 'Got it!';

  // This line appends the close button to the popUp Modal
  popUpModal.appendChild(closeBtn);

  // This line appends the popUp modal window to the document's body 
  document.body.appendChild(popUpModal);
}
// This function is called when the backdrop is clicked
 // or when the "Got it!" button is clicked.
function hideInfoPopUpModal() {
  // This is a function call to toggle the 
  // visibility of the backdrop.
  toggleBackdrop();
  // This is the command to remove the popUpModal
  // from the document's body. 
  document.body.removeChild(popUpModal);
}

// Lastly, we need to add 2 event listeners...

// The first listener uses a "for - of" loop which gets
// all the links (2) appearing on the web page and stores
// the values received in the linkElement variable. 
// While doing so, is also register an Event Listener
// on each of the links.
// Then, when any of the links is clicked, the showInfoPopUpModal
// function is called.
for (const linkElement of modalLinkElements) {  
  linkElement.addEventListener('click', showInfoPopUpModal);
}

// Here we add an event listener for a click event on the backdrop element
// which calls the hideInfoPopUpModal function to close the popUp.
backdropElement.addEventListener('click', hideInfoPopUpModal);