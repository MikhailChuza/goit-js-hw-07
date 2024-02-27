const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function() {
  const trimmedValue = nameInput.value.trim();
  const nameToShow = trimmedValue === '' ? 'Anonymous' : trimmedValue;
  nameOutput.textContent = nameToShow;
});