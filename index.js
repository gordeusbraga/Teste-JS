function clicar(){
var opcao = document.getElementById("option").value;
var num1 = document.getElementById("btn1").value;
var num2 = document.getElementById("btn2").value;
var result = document.getElementById("resultado");
var total;
switch(opcao){
    case "1":
        
        var total = parseInt(num1)+parseInt(num2);
        result.innerHTML = "O valor da operação é de: " + total;
    break;    
    case "2":
        var total = num1-num2;
        result.innerHTML = "O valor da operação é de: " + total;
    break;   
    case "3":
        var total = num1*num2;
        result.innerHTML = "O valor da operação é de: " + total;
    break;   
    case "4":
        var total = num1/num2;
        result.innerHTML = "O valor da operação é de: " + total;
    break; 
    default:
          


}

result.innerHTML = "O valor da operação é de: " + total;
}

