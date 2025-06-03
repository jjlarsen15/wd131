// ===== Responsive Navigation Menu =====
const menuButton = document.querySelector('#menu-button');
const navLinks = document.querySelector('#nav-links');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('hide');
});

function handleResize() {
  if (window.innerWidth > 1000) {
    navLinks.classList.remove('hide');
  } else {
    navLinks.classList.add('hide');
  }
}

window.addEventListener('resize', handleResize);
handleResize();

// ===== Modal Image Viewer =====


const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (event) => {
  const clickedImage = event.target.closest('img');
  if (!clickedImage) return;

  const fullSrc = 'images/norris-full.jpeg';
  const alt = 'Full-size Norris image';

  const modal = document.createElement('dialog');
  modal.innerHTML = `
    <div class="dialog-content">
      <img src="${fullSrc}" alt="${alt}">
      <button class="close-viewer">X</button>
    </div>
  `;

  document.body.appendChild(modal);
  modal.showModal();

  modal.querySelector('.close-viewer').addEventListener('click', () => {
    modal.close();
    modal.remove();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.close();
      modal.remove();
    }
  });
});
