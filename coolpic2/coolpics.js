// Menu toggle
const menuButton = document.querySelector('#menu-button');
const navLinks = document.querySelector('#nav-links');

// Hide/show the menu on small screens
menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('hide');
});

// Handle resizing the window
function handleResize() {
  if (window.innerWidth > 1000) {
    navLinks.classList.remove('hide');
  } else {
    navLinks.classList.add('hide');
  }
}

// Run once on load, and again on resize
window.addEventListener('resize', handleResize);
handleResize(); // call on initial load

// Modal image viewer
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('#image-modal');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Open the modal with clicked image
gallery.addEventListener('click', (event) => {
  const clickedImage = event.target.closest('img');
  if (!clickedImage) return;

  const src = clickedImage.getAttribute('src');
  const alt = clickedImage.getAttribute('alt');
  const baseName = src.split('-')[0]; // 'norris'
  const fullSrc = baseName + '-full.jpeg';

  modalImage.setAttribute('src', fullSrc);
  modalImage.setAttribute('alt', alt);
  modal.showModal();
});

// Close modal with the close button
closeButton.addEventListener('click', () => {
  modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
