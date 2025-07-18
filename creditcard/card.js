function isCardNumberValid(number) {
  // Only accept 1234123412341234 as valid
  return number.replace(/\s+/g, '') === '1234123412341234';
}

function displayError(msg) {
  document.querySelector('.errorMsg').innerHTML = msg;
}

function submitHandler(event) {
  event.preventDefault();
  let errorMsg = '';
  const number = this.cardNumber.value.replace(/\s+/g, '');
  const month = parseInt(this.expMonth.value);
  const year = parseInt('20' + this.expYear.value);

  displayError('');

  // Validate card number
  if (isNaN(number)) {
    errorMsg += 'Card number must be numeric.<br>';
  } else if (!isCardNumberValid(number)) {
    errorMsg += 'Card number is not valid.<br>';
  }

  // Validate expiration
  const now = new Date();
  const expDate = new Date(year, month - 1);
  if (expDate <= now) {
    errorMsg += 'Expiration date must be in the future.<br>';
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return false;
  }

  alert('Payment submitted successfully!');
  return true;
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler);
