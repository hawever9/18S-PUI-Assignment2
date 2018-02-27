function Pikachu(name, level) {
  this.name = name;
  this.level = level;
  this.type = Pikachu;
  this.image = "pikachu.jpg";
}

function Eevee(name, level) {
  this.name = name;
  this.level = level;
  this.type = Eevee;
  this.image = "eevee.jpg";
}

function Mew(name, level) {
  this.name = name;
  this.level = level;
  this.type = Mew;
  this.image = "mew.jpg";
}


var pokemons = [new Eevee(), new Pikachu(), new Mew()];
var names = ["Alice", "Bob", "Coco", "Daigo", "Elisa"]

function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}


function generateRandomPokemon() {
  var randomIdx = getRandomIndex(pokemons.length);
  var randomPokemon = pokemons[randomIdx];

  if (randomPokemon instanceof Pikachu) {
    return new Pikachu(generateRandomName(), generateRandomLevel());
  } 
  else if (randomPokemon instanceof Eevee) {
    return new Eevee(generateRandomName(), generateRandomLevel());
  } 
  else if (randomPokemon instanceof Mew) {
    return new Mew(generateRandomName(), generateRandomLevel());
  }
}

function generateRandomName(){
    var randomIdx = getRandomIndex(names.length);
    return names[randomIdx];
}

function generateRandomLevel(){
    return getRandomIndex(45)+5;
}


$(document).ready(function() {
  var pokemon = generateRandomPokemon();
  $("#pokemon-properties").text(pokemon.name + "  Lv." + pokemon.level);
  $("#pokemon-img").attr("src", pokemon.image);

});

