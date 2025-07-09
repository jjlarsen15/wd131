document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const phone = e.target.phone.value.trim();
  const message = e.target.message.value.trim();
  const address = e.target.address.value.trim();
  const city = e.target.city.value.trim();
  const state = e.target.state.value.trim();
  const zip = e.target.zip.value.trim();
  const form = document.getElementById('contactForm');


  if (name && email && phone && message && address & city & state & zip) {
    fetch('https://script.google.com/macros/s/AKfycbwHIPUPCaZMYFprKXJ0yOATcuJ3Mc6qwi_lY_957oca9myPml6daakbiXoZ5A-QEILU/exec', {
  method: 'POST',
  mode: 'no-cors',
  body: JSON.stringify({ name, email, phone, message, address, city, state, zip}),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(() => {
  form.innerHTML = "<p style='color: green;'>Submitted! We'll contact you soon.</p>";
})
.catch((err) => {
  console.error('Submission error:', err);
  alert('Something went wrong. Try again later.');
});


  }
});