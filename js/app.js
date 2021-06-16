var operation = [];
var operators = ['+', '-', '*', '/', '.'];
var numbers =  ["1","2","3","4","5","6","7","8","9","0"];
var lastAction = "number";

const AllBtns = document.querySelectorAll('.btn');
const result = document.querySelector('.result');

AllBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {

        if (operators.includes(e.target.id)) {
            // l'utilisateur clique sur une opération
            if(lastAction == "number"){
                operation.push(e.target.id);
            }
            else if(lastAction == "operator"){
                operation.pop();
                operation.push(e.target.id);
            }
            lastAction = "operator";
        }
        else if(numbers.includes(e.target.id)){
            // l'utilisateur clique sur un chiffre
            operation.push(e.target.id);

            lastAction = "number";
        }
        else if(e.target.id == "equal"){
            result.innerHTML = (eval(operation.join(""))).toFixed(2);
            operation = [];
            lastAction = "number";
            return;
        }
        else if(e.target.id == "reset"){
            operation = [];
            lastAction = "number";
        }
        else if(e.target.id == 'del'){
            operation.pop();
            lastAction = "number";
        }
        
        result.innerHTML = operation.join("");
    });
})
