function display(val) {
    document.getElementById("input").value += val;
}

function allClear(){
    document.getElementById("input").value = "";
}

function del(){
    let expression = document.getElementById("input").value;
    let newExpression = expression.slice(0,-1);
    document.getElementById("input").value = newExpression;
}

function solve(){
    let expression = document.getElementById("input").value;
    let result = eval(expression);
    document.getElementById("input").value = result;
}