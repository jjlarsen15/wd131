// ----- Given in the prompt -----
function convert(grade) {
  let points;
  switch (grade) {
    case "A": points = 4; break;
    case "B": points = 3; break;
    case "C": points = 2; break;
    case "D": points = 1; break;
    case "F": points = 0; break;
    default: alert("not a valid grade");
  }
  return points;
}

const words = ["watermelon", "peach", "apple", "tomato", "grape"];

const students = [
  { last: "Andrus", first: "Aaron" },
  { last: "Masa", first: "Manny" },
  { last: "Tanda", first: "Tamanda" },
];

// ----- 1) Bulleted list + console echo (one, two, three) -----
const bullets = ["one", "two", "three"];
const bulletList = document.querySelector("#bullets");
bullets.forEach(w => {
  console.log(w);                        // -> one / two / three
  const li = document.createElement("li");
  li.textContent = w;
  bulletList.appendChild(li);
});

// ----- 2) Array methods on words -----

// Filter to exactly 5-letter words (peach, apple, grape) -> Array(3)
const fiveLetters = words.filter(w => w.length === 5);
console.log(fiveLetters);

// ----- 3) GPA-like calc using switch() helper -----
const myGrades = ["A", "C", "D"];       // 4 + 2 + 1 = 7
const points = myGrades.map(convert);   // [4,2,1]
const total = points.reduce((sum, p) => sum + p, 0);
console.log(total);                     // -> 7
console.log(total / points.length);     // -> 2.3333333333333335

// ----- 4) Map students to "First Last" then render to DOM -----
const fullNames = students.map(s => `${s.first} ${s.last}`);
console.log(fullNames);                 // -> Array(3)

const studentSection = document.querySelector("#students");
fullNames.forEach(name => {
  studentSection.insertAdjacentHTML("beforeend", `
    <hr class="rule">
    <div class="student">${name}</div>
  `);
});
// trailing rule to match the screenshot spacing
studentSection.insertAdjacentHTML("beforeend", `<hr class="rule">`);

// ----- 5) Another quick array result -> 2 (matches screenshot tail) -----
// Count words containing the letter 'm' (watermelon, tomato)
const mCount = words.filter(w => w.includes("m")).length;
console.log(mCount);                    // -> 2
