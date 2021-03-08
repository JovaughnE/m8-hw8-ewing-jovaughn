// Declaration of the variables navLinks and dropdown to define the tools for the following function and for-loop.

var navLinks = document.getElementsByClassName('main-menu')
var dropdowns = document.getElementsByClassName('dropdown')
console.log(navLinks)

//Javascript function to toggle the sub-menu to show on hover
function toggleDropdown() {
    console.log(this.children[1]);
    this.children[1].classList.toggle('show');
    }

//Javascript for-loop to listen for the event of mouse enter and mouse leave to activate the 'Show' CSS toggle.
for (i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('mouseenter', toggleDropdown);
    navLinks[i].addEventListener('mouseleave', toggleDropdown);
}
