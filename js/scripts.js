// selecao elemento
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTable = document.querySelector("#multiplication-operations");

const multiplicationTitle = document.querySelector("#multiplication-title span");


// funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplicatorNumber; i++) {
       const result = number * i;
       
       //console.log(result); usado p testar

       const template = `<div class="row">
            <div classe="operation">${number} x ${i} = </div>
            <div classe="result">${result}</div>
       </div>`;

       const parser = new DOMParser();

       const htmlTemplate = parser.parseFromString(template, "text/html");

       const row = htmlTemplate.querySelector(".row");
       multiplicationTable.appendChild(row);
    }
        multiplicationTitle.innerHTML = number;
};


//eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    // validacao (caso nao houver os numeros para validar se o\nao for preenchido)
    if(!multiplicationNumber|| !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);
});