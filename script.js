const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
});

const buttons = form.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const num1 = parseInt(form.num1.value);
    const num2 = parseInt(form.num2.value);

    let answer;
    switch (button.value) {
      case 'add':
        answer = num1 + num2;
        break;
      case 'subtract':
        answer = num1 - num2;
        break;
      case 'multiply':
        answer = num1 * num2;
        break;
      case 'divide':
        answer = num1 / num2;
        break;
    }

    result.textContent = answer;
  });
});