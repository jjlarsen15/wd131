document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const phone = e.target.phone.value.trim();
  const address = e.target.address.value.trim();
  const city = e.target.city.value.trim();
  const state = e.target.state.value.trim();
  const zip = e.target.zip.value.trim();
  const message = e.target.message.value.trim();
  const form = document.getElementById('contactForm');

  // All fields are required now
  if (name && email && phone && address && city && state && zip && message) {
    fetch('https://script.google.com/macros/s/AKfycbwHIPUPCaZMYFprKXJ0yOATcuJ3Mc6qwi_lY_957oca9myPml6daakbiXoZ5A-QEILU/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
        city,
        state,
        zip,
        message
      })
    })
    .then(response => response.text())
    .then(text => {
      console.log('Response:', text);
      form.innerHTML = "<p style='color: green;'>Submitted! We'll contact you soon.</p>";
    })
    .catch((err) => {
      console.error('Submission error:', err);
      alert('Something went wrong. Try again later.');
    });
  } else {
    alert("Please fill out all required fields.");
  }
});