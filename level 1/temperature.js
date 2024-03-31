document.getElementById('button').addEventListener('click', function() {
  const temperatureInput = document.getElementById('temperatureInput').value;
  const selectunit = document.getElementById('selectunit');
  const selectedUnit = selectunit.options[selectunit.selectedIndex].value;
  let convertedTemperature;

  if (selectedUnit === 'celsius') {
    convertedTemperature = (parseFloat(temperatureInput) * 9 / 5) + 32;
    document.getElementById('result').innerText = `${temperatureInput}°C is equal to ${convertedTemperature.toFixed(2)}°F`;
  } else if (selectedUnit === 'fahrenheit') {
    convertedTemperature = (parseFloat(temperatureInput) - 32) * 5 / 9;
    document.getElementById('result').innerText = `${temperatureInput}°F is equal to ${convertedTemperature.toFixed(2)}°C`;
  } else if (selectedUnit === 'kelvin') {
    convertedTemperature = parseFloat(temperatureInput) + 273.15;
    document.getElementById('result').innerText = `${temperatureInput}K is equal to ${convertedTemperature.toFixed(2)}°C`;
  }
});
