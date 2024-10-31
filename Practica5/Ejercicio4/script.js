function calcular(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let oper = document.getElementById("oper").value;
    let result;

    switch(oper){
        case '+':
            result = parseInt(num1) + parseInt(num2);
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    document.getElementById("result").value = result;
}