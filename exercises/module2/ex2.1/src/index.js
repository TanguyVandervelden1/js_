import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

import image1 from './img/gladiator.jpg';
import image2 from './img/interstellar.jpg';

const imageInterstellar = document.createElement('img');
const imageGladiator = document.createElement('img');
imageInterstellar.src = image1;
imageGladiator.src = image2;
imageInterstellar.height = 250;
imageGladiator.height = 250;

const titre1 = document.createElement('h1');
titre1.textContent = "Mes films prefs : ";


const body = document.querySelector('body');
body.appendChild(titre1);
body.appendChild(imageInterstellar);
body.appendChild(imageGladiator);

const subButton = document.querySelector('#createTableButton');

subButton.addEventListener('click', (event)=>{
    event.preventDefault();
    const lll = createArray();
    const table = createHtmlTableAsString(lll);
    body.appendChild(table);
});

function createArray() {

    const l = document.getElementById("numberLines").value;
    const c = document.getElementById("numberColumns").value;
    const ii = document.getElementById("initString").value;
    const list = [];

    for (let index = 0; index < l; index+=1) {
        list[index] = [];
        for (let index2 = 0; index2 < c; index2+=1) {
            list[index][index2] = `${ii}[${l}][${c}]`; 
        }
    }
    return list; 
};

function createHtmlTableAsString(arrayL) {
const tableWrapper = document.createElement('div');

  tableWrapper.className = 'tt';

  const table = document.createElement('table');

  const tbody = document.createElement('tbody');

  table.id = 'table-drinks';

  table.className = 'table-bordered';

  tableWrapper.appendChild(table);

  table.appendChild(tbody);

  arrayL?.forEach((cas) => {

    const line = document.createElement('tr');

    const title = document.createElement('td');

    title.innerText = cas;

    line.appendChild(title);

    tbody.appendChild(line);

  });


  return tableWrapper;
};