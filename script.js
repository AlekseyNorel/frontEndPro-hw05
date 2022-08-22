const num1 = +prompt('enter 1 number')
const operation = prompt('enter math. operation')
const num2 = +prompt('enter 2 number')
if (!isNaN(num1) && !isNaN(num2)) {
   switch (operation) {
      case '-': alert(`Your result is ${num1 - num2}`); break;
      case '+': alert(`Your result is ${num1 + num2}`); break;
      case '/': alert(`Your result is ${num1 / num2}`); break;
      case '*': alert(`Your result is ${num1 * num2}`); break;
      default: alert('This operation is not exist');
   }

} else {
   alert('try to enter the correct numbers')
}




