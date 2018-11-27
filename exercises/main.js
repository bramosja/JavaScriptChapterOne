// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
let firstSection = document.querySelector(".article__header");
console.log(firstSection);

firstSection.textContent = "Welcome to the Brittany blog";

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
let allSections = document.querySelectorAll (".article__header");
console.log("headers list", allSections)

for (let i = 0; i < Headers.length; i++) {
    headers[i].classList.add("important");
}

//For loop needs to be added

// Obtain a reference the element with a class of dashed and remove it.
let dashedSect = document.querySelector(".dashed");
dashedSect.classList.remove("dashed");

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
let artFoot = document.querySelector(".article__footer");
artFoot.classList.add("goldenrod");