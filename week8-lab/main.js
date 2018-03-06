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
  var pokemon = JSON.parse(localStorage.getItem("savedPokemon"));
  var haveSavedPokemon = false;
  if (pokemon == null) {
    $("#button-storage").text("Save Pokemon");
    pokemon = generateRandomPokemon();
  } 
  else {
    $("#button-storage").text("Clear Pokemon");
    haveSavedPokemon = true;
  }

  $("#pokemon-properties").text(pokemon.name + "  Lv." + pokemon.level);
  $("#pokemon-img").attr("src", pokemon.image);

  $('#button-storage').click(function(){
    if (haveSavedPokemon){
      localStorage.removeItem("savedPokemon");
      $("#button-storage").css("display", "none");
      $("#button-action-text").text("Cleared!");
      $("#button-action-text").css("display", "block");
    }
    else {
      localStorage.setItem("savedPokemon", JSON.stringify(pokemon));
      $("#button-storage").css("display", "none");
      $("#button-action-text").text("Saved!");
      $("#button-action-text").css("display", "block");

    }
  });

});

