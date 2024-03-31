function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    let expression = document.getElementById('display').value;
    let result = eval(expression);
    document.getElementById('display').value = result;
  }
  function reset() {
    document.getElementById('display').innerText = '';
  }
  function appendToDisplay(value) {
    if (display.value === '0') {
      display.value = value;
    } else {
      display.value += value;
    }
  }

  function eraseDigit() {
    if (display.value.length > 0) {
      display.value = display.value.slice(0, -1);
    }
  }

  function reset() {
    display.value = '0';
  }