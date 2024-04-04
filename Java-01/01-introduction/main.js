// const elFirstName = document.querySelector('.first-name');
// const elLastName = document.querySelector('.last-name');

// const firstName = 'Filan';
// const lastName = 'Fisteku';

// elFirstName.textContent = firstName;
// elLastName.innerHTML = `<strong>${lastName}</strong>`;

const btnSave = document.querySelector('.btn-save');

// btnSave.addEventListener('click', () => {})
// shtoja nje event
btnSave.addEventListener('click', function () {
  const elInput = document.querySelector('.inp-fjala');
  const inputValue = elInput.value;

  // '' ose null => false
  if (!inputValue.trim()) {
    alert('Shkruani nje fjale.');
    return;
  }

  const elResult = document.querySelector('.result');
  elResult.innerHTML = `Fjala <strong>${inputValue.trim()}</strong> 
  ka ${inputValue.trim().length} karaktere`;

  elResult.classList.remove('error', 'success');
  inputValue.trim().length > 10 ? 
    elResult.classList.add('error') : 
    elResult.classList.add('success');

  elInput.value = '';
});
