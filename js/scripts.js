let expression = "";
let result = "";
function addToExpression(value) {
  expression += value;
  document.getElementById("expression").value = expression;
}

function calculate() {
  try {
    result = eval(expression);
  } catch (error) {
    result = "Помилка";
  }
  document.getElementById("result").value = result;
  expression = "";
}
