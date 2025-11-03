// Data (from the assignment)
const movies = [
  {
    title: "Spider-Man: Into the Spider-Verse",
    date: "Dec 14, 2018",
    description:
      "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
    imgAlt: "Miles Morales swinging through the city",
    ages: "10+",
    genre: "Action/Adventure",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    title: "The Other Side of Heaven",
    date: "December 14, 2001",
    description:
      "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
    imgAlt:
      "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
    ages: "10+",
    genre: "Drama/Religious",
    stars: "⭐⭐⭐⭐",
  },
  {
    title: "Luca",
    date: "June 18, 2021",
    description:
      "Two sea monsters experience a life-changing summer on the Italian Riviera.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
    imgAlt: "Luca and Alberto standing on the beach",
    ages: "6+",
    genre: "Family/Fantasy",
    stars: "⭐⭐⭐⭐",
  },
  {
    title: "17 Miracles",
    date: "June 3, 2011",
    description:
      "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
    imgAlt:
      "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
    ages: "12+",
    genre: "Historical/Religious",
    stars: "⭐⭐⭐⭐",
  },
];

// Template → returns one <article>
const starLabel = (stars) => `${stars.length} out of 5 stars`;
function movieTemplate(m) {
  return `
    <article class="movie">
      <img class="poster" src="${m.imgSrc}" alt="${m.imgAlt}">
      <div>
        <h2 class="title">${m.title}</h2>
        <div class="meta">
          <p><strong>Release Date:</strong> ${m.date}</p>
          <p><strong>Recommended Age:</strong> ${m.ages}</p>
          <p><strong>Genre:</strong> ${m.genre}</p>
          <p><strong>Rating:</strong> <span aria-label="${starLabel(m.stars)}">${m.stars}</span></p>
        </div>
      </div>
      <p class="desc">${m.description}</p>
    </article>
  `;
}

// Render all movies
const list = document.getElementById("movie-list");
const frag = document.createDocumentFragment();

movies.forEach((movie) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = movieTemplate(movie);
  frag.appendChild(wrapper.firstElementChild);
});

list.appendChild(frag);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle (keeps your header behavior)
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("primary-nav");
toggle?.addEventListener("click", () => {
  const open = nav.getAttribute("data-open") === "true";
  nav.setAttribute("data-open", String(!open));
  toggle.setAttribute("aria-expanded", String(!open));
});
