/* ============================
      HIKE DATA
============================ */
const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 1,
    description:
      "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through...",
    trailhead: [44.14457, -110.99781]
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Teton Canyon",
    distance: "3 miles",
    tags: ["Canyon", "Tetons"],
    difficulty: 1,
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions:
      "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road...",
    trailhead: [43.75567, -110.91521]
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Denanda Falls",
    distance: "7 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 3,
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions:
      "Take Highway 20 north to Ashton... then Cave Falls road...",
    trailhead: [44.14974, -111.04564]
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Coffee Pot Rapids",
    distance: "2.2 miles",
    tags: ["Rafting"],
    difficulty: 1,
    description:
      "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
    directions:
      "Take Highway 20 north to Island Park... campground entrance.",
    trailhead: [44.49035, -111.36619]
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Volcanic", "View"],
    difficulty: 2,
    description:
      "A steep climb to one of the largest volcanic tuff cones in the world.",
    directions:
      "Take Highway 33 West out of Rexburg for about 8 miles...",
    trailhead: [43.78555, -111.98996]
  }
];

/* ============================
      DOM ELEMENTS
============================ */
const hikeContainer = document.querySelector("#hike-container");
const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");

/* ============================
   HELPER: Convert "3 miles" → 3
============================ */
function getDistanceNumber(distanceString) {
  return parseFloat(distanceString);
}

/* ============================
   HELPER: Tag Buttons
============================ */
function tagTemplate(tags) {
  return tags.map(tag => `<button>${tag}</button>`).join(" ");
}

/* ============================
   HELPER: Difficulty Boots
============================ */
function difficultyTemplate(level) {
  let html = `<span class="rating" role="img" aria-label="Difficulty ${level} of 5">`;

  for (let i = 1; i <= 5; i++) {
    html += i <= level ? "🥾" : "▫️";
  }

  html += "</span>";
  return html;
}

/* ============================
   HIKE CARD TEMPLATE
============================ */
function hikesTemplate(hike) {
  return `
    <div class="hike-card">
      <div class="hike-content">
        <h2>${hike.name}</h2>
        <div class="hike-tags">
          ${tagTemplate(hike.tags)}
        </div>
        <p>${hike.description}</p>
        ${difficultyTemplate(hike.difficulty)}
      </div>
    </div>
  `;
}

/* ============================
   RENDER A SINGLE HIKE
============================ */
function renderHike(hike) {
  hikeContainer.innerHTML += hikesTemplate(hike);
}

/* ============================
   SEARCH FUNCTION
============================ */
function search() {
  const q = searchInput.value.toLowerCase();

  const filtered = hikes.filter(hike =>
    hike.name.toLowerCase().includes(q) ||
    hike.description.toLowerCase().includes(q) ||
    hike.tags.find(tag => tag.toLowerCase().includes(q))
  );

  const sorted = filtered.sort(
    (a, b) => getDistanceNumber(a.distance) - getDistanceNumber(b.distance)
  );

  hikeContainer.innerHTML = "";

  sorted.forEach(renderHike);
}

/* ============================
   INITIAL RANDOM HIKE
============================ */
function init() {
  const randomIndex = Math.floor(Math.random() * hikes.length);
  renderHike(hikes[randomIndex]);
}

searchBtn.addEventListener("click", search);
init();
