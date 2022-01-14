var num1 = prompt("Tastează primul număr");
var num2 = prompt("Tastează al doilea număr"); 

var op = prompt("Introdu operația cqre se va efectua cu aceste numere")
var result;

switch (op) {
    case '+':
        result = parseInt(num1) + parseInt(num2);

        alert(result);
        break;

    case '-':
        result = parseInt(num1) - parseInt(num2);

        alert(result);
        break;
    
    case '/':
        result = parseInt(num1) / parseInt(num2);

        alert(result);
        break;

    case '*':
        result = parseInt(num1) * parseInt(num2);

        alert(result);
        break;
    
    default:

    alert("Nu ai introdus corect! Mai incearcă");
    break;
}