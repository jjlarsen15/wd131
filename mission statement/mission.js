// Select the <select> element from the DOM
const themeSelector = document.getElementById('theme');

// Add an event listener for the 'change' event
themeSelector.addEventListener('change', changeTheme);

// Define the function that handles theme changes
function changeTheme() {
  const selectedTheme = themeSelector.value;
  const body = document.body;
  const logo = document.querySelector('.logo');

  if (selectedTheme === 'dark') {
    body.classList.add('dark');
    logo.src = 'images/byui-logo_white.png';
  } else {
    body.classList.remove('dark');
    logo.src = 'images/byui-logo_blue.webp';
  }
}
