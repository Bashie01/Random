const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const spriteContainer = document.getElementById("sprite-container");

// fetch function to get pokemon data, function taken from fCC Forum Leaderboard project, repurposed for this project
const gottaCatchThemAll = async () => {
  try {
    const pokemonNameOrId = searchInput.value.toLowerCase();
    const res = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`
    );
    const data = await res.json();
    pokemonInfo(data);
  } catch (err) {
    alert("Pokémon not found");
    console.log(err);
  }
};

const pokemonInfo = (data) => {
  const { name, id, weight, height, types, sprites, stats } = data;

  pokemonName.textContent = `${name[0].toUpperCase() + name.slice(1)}`;
  pokemonId.textContent = `#${id}`;
  pokemonWeight.textContent = `Weight: ${weight}`;
  pokemonHeight.textContent = `Height: ${height}`;

  spriteContainer.innerHTML = `<img id="sprite" src="${sprites.front_default}" />`;

  hp.textContent = `HP: ${stats[0].base_stat}`;
  attack.textContent = `Attack: ${stats[1].base_stat}`;
  defense.textContent = `Defense: ${stats[2].base_stat}`;
  specialAttack.textContent = `Special Attack: ${stats[3].base_stat}`;
  specialDefense.textContent = `Special Defense: ${stats[4].base_stat}`;
  speed.textContent = `Speed: ${stats[5].base_stat}`;

  pokemonTypes.innerHTML = types
    .map(
      (obj) =>
        `<span>${
          obj.type.name[0].toUpperCase() + obj.type.name.slice(1)
        }</span>`
    )
    .join(" ");
};

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  gottaCatchThemAll();
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchButton.click();
  }
});
