const body = document.querySelector("body");
const div1 = document.querySelector("#id1"); // Changed the variable name from 'div' to 'div1'
const div2 = document.querySelector("#id2"); // Corrected the variable name from 'di2' to 'div2'

body.addEventListener("click", addCount);

var count = 0;
div2.innerText = count;

function addCount() {
    count++;
    div2.innerText = count;
    if (count >= 5 && count < 10) {
        div1.innerText = "Bravo, bel échauffement !";
    }
    if (count >= 10) {
        div1.innerText = "Vous êtes passé maître en l'art du clic !";
    }
}
