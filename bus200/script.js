document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const phone = e.target.phone.value.trim();
  const message = e.target.message.value.trim();
  const form = document.getElementById('contactForm');

  if (name && email && phone && message) {
    fetch('https://script.google.com/macros/s/AKfycbwHIPUPCaZMYFprKXJ0yOATcuJ3Mc6qwi_lY_957oca9myPml6daakbiXoZ5A-QEILU/exec', {
  method: 'POST',
  body: JSON.stringify({ name, email, phone, message }),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => res.text())
  .then((text) => {
    console.log('Server response:', text); // Log exact output
    if (text.includes('Success')) {
      form.innerHTML = "<p style='color: green;'>Submitted! We'll contact you soon.</p>";
    } else {
      alert('Server error: ' + text);
    }
  })
  .catch((err) => {
    console.error('Submission error:', err);
    alert('Something went wrong. Try again later.');
  });

  }
});