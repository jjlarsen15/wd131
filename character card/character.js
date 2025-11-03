const character = {
  name: "Snortlebat",
  ["class"]: "Swamp Beast Diplomat",
  level: 3,
  health: 100,
  image: "image/characterimage.webp",
  _deadAlerted: false,

  attacked() {
    const before = this.health;
    this.health = Math.max(0, this.health - 20);
    render();

    if (this.health === 0 && before !== 0 && !this._deadAlerted) {
      alert(`${this.name} has died.`);
      this._deadAlerted = true;
      document.getElementById("attackBtn").disabled = true;
    }
  },

  levelUp() {
    this.level += 1;
    render();
  }
};

function render() {
  document.getElementById("charName").textContent = character.name;
  document.getElementById("charClass").textContent = character["class"];
  document.getElementById("charLevel").textContent = character.level;
  document.getElementById("charHealth").textContent = character.health;

  const img = document.getElementById("charImage");
  img.src = character.image;
  img.alt = `${character.name} artwork`;
}

document.getElementById("attackBtn").addEventListener("click", () => {
  character.attacked();
});

document.getElementById("levelBtn").addEventListener("click", () => {
  character.levelUp();
});

render();
