const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Open modal when a thumbnail is clicked
gallery.addEventListener('click', openModal);

function openModal(e) {
  const target = e.target;
  if (target && target.tagName === 'IMG') {
    // Derive the high-res image path from the thumbnail path.
    // Assumes files are paired as: images/foo-sm.jpg -> images/foo.jpg
    // If your high-res uses a different pattern (e.g., "-lg"), change the replace below:
    const highResSrc = target.src.replace('-sm', '-full');
    modalImage.src = highResSrc;
    modalImage.alt = target.alt || '';
    modal.showModal();
  }
}

// Close modal on button click
closeButton.addEventListener('click', () => {
  modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

// Close modal on 'Esc' key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.open) {
    modal.close();
  }
});
