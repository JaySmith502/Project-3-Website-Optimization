/*
Welcome to the 60fps project! Your goal is to make Cam's Pizzeria website run
jank-free at 60 frames per second.
There are two major issues in this code that lead to sub-60fps performance. Can
you spot and fix both?
Built into the code, you'll find a few instances of the User Timing API
(window.performance), which will be console.log()ing frame rate data into the
browser console. To learn more about User Timing API, check out:
http://www.html5rocks.com/en/tutorials/webperformance/usertiming/
Creator:
Cameron Pittman, Udacity Course Developer
cameron *at* udacity *dot* com
*/

// As you may have realized, this website randomly generates pZs.
// Here are arrays of all possible pZ ingredients.

//changed var pZIngredients to pI to begin minifying variable ns
//changed var mts to m
var pI = {};
pI.m = [
  "Pepperoni",
  "Sausage",
  "Fennel Sausage",
  "Spicy Sausage",
  "Chicken",
  "BBQ Chicken",
  "Chorizo",
  "Chicken Andouille",
  "Salami",
  "Tofu",
  "Bacon",
  "Canadian Bacon",
  "Proscuitto",
  "Italian Sausage",
  "Ground Beef",
  "Anchovies",
  "Turkey",
  "Ham",
  "Venison",
  "Lamb",
  "Duck",
  "Soylent Green",
  "Carne Asada",
  "Soppressata Picante",
  "Coppa",
  "Pancetta",
  "Bresola",
  "Lox",
  "Guanciale",
  "Chili",
  "Beef Jerky",
  "Pastrami",
  "Kielbasa",
  "Scallops",
  "Filet Mignon"
];
//changed nonmts to nm
pI.nm = [
  "White Onions",
  "Red Onions",
  "Sauteed Onions",
  "Green Peppers",
  "Red Peppers",
  "Banana Peppers",
  "Ghost Peppers",
  "Habanero Peppers",
  "Jalapeno Peppers",
  "Stuffed Peppers",
  "Spinach",
  "Tomatoes",
  "Pineapple",
  "Pear Slices",
  "Apple Slices",
  "Mushrooms",
  "Arugula",
  "Basil",
  "Fennel",
  "Rosemary",
  "Cilantro",
  "Avocado",
  "Guacamole",
  "Salsa",
  "Swiss Chard",
  "Kale",
  "Sun Dried Tomatoes",
  "Walnuts",
  "Artichoke",
  "Asparagus",
  "Caramelized Onions",
  "Mango",
  "Garlic",
  "Olives",
  "Cauliflower",
  "Polenta",
  "Fried Egg",
  "Zucchini",
  "Hummus"
];
// changed .cheses to c
pI.c = [
  "American ch",
  "Swiss ch",
  "Goat ch",
  "Mozzarella ch",
  "Parmesean ch",
  "Velveeta ch",
  "Gouda ch",
  "Muenster ch",
  "Applewood ch",
  "Asiago ch",
  "Bleu ch",
  "Boursin ch",
  "Brie ch",
  "Cheddar ch",
  "Chevre ch",
  "Havarti ch",
  "Jack ch",
  "Pepper Jack ch",
  "Gruyere ch",
  "Limberger ch",
  "Manchego ch",
  "Marscapone ch",
  "Pecorino ch",
  "Provolone ch",
  "Queso ch",
  "Roquefort ch",
  "Romano ch",
  "Ricotta ch",
  "Smoked Gouda"
];
//changed sauces to s
pI.s = [
  "Red Sauce",
  "Marinara",
  "BBQ Sauce",
  "No Sauce",
  "Hot Sauce"
];
// changed crusts to cr
pI.cr = [
  "White Crust",
  "Whole Wheat Crust",
  "Flatbread Crust",
  "Stuffed Crust"
];

// n generator pulled from http://saturdaykid.com/userns/generator.html
// Capitalizes first letter of each word
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// Pulls adjective out of array using random number sent from generator
// Removed extraneous scientific array from bottom of gA(x) and put variable in above switch(x) call
// changed gA to gA
function gA(x){
      var scientific = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological", 
      "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar", 
      "extinct", "galactic"];
  switch(x) {
    case "dark": 
      var dark = ["dark","morbid", "scary", "spooky", "gothic", "deviant", "creepy", "sadistic", "black", "dangerous", "dejected", "haunted", 
      "morose", "tragic", "shattered", "broken", "sad", "melancholy", "somber", "dark", "gloomy", "homicidal", "murderous", "shady", "misty", 
      "dusky", "ghostly", "shadowy", "demented", "cursed", "insane", "possessed", "grotesque", "obsessed"];
      return dark;
    case "color": 
      var colors = ["blue", "green", "purple", "grey", "scarlet", "NeonGreen", "NeonBlue", "NeonPink", "HotPink", "pink", "black", "red", 
      "maroon", "silver", "golden", "yellow", "orange", "mustard", "plum", "violet", "cerulean", "brown", "lavender", "violet", "magenta",
      "chestnut", "rosy", "copper", "crimson", "teal", "indigo", "navy", "azure", "periwinkle", "brassy", "verdigris", "veridian", "tan", 
      "raspberry", "beige", "sandy", "ElectricBlue", "white", "champagne", "coral", "cyan"];
      return colors;
    case "whimsical": 
      var whimsy = ["whimsical", "silly", "drunken", "goofy", "funny", "weird", "strange", "odd", "playful", "clever", "boastful", "breakdancing",
      "hilarious", "conceited", "happy", "comical", "curious", "peculiar", "quaint", "quirky", "fancy", "wayward", "fickle", "yawning", "sleepy",
      "cockeyed", "dizzy", "dancing", "absurd", "laughing", "hairy", "smiling", "perplexed", "baffled", "cockamamie", "vulgar", "hoodwinked", 
      "brainwashed"];
      return whimsy;
    case "shiny":
      var shiny = ["sapphire", "opal", "silver", "gold", "platinum", "ruby", "emerald", "topaz", "diamond", "amethyst", "turquoise", 
      "starlit", "moonlit", "bronze", "metal", "jade", "amber", "garnet", "obsidian", "onyx", "pearl", "copper", "sunlit", "brass", "brassy",
      "metallic"];
      return shiny;
    case "noisy":
      var noisy = ["untuned", "loud", "soft", "shrieking", "melodious", "musical", "operatic", "symphonic", "dancing", "lyrical", "harmonic", 
      "orchestral", "noisy", "dissonant", "rhythmic", "hissing", "singing", "crooning", "shouting", "screaming", "wailing", "crying", "howling",
      "yelling", "hollering", "caterwauling", "bawling", "bellowing", "roaring", "squealing", "beeping", "knocking", "tapping", "rapping", 
      "humming", "scatting", "whispered", "whispering", "rasping", "buzzing", "whirring", "whistling", "whistled"];
      return noisy;
    case "apocalyptic":
      var apocalyptic = ["nuclear", "apocalyptic", "desolate", "atomic", "zombie", "collapsed", "grim", "fallen", "collapsed", "cannibalistic", 
      "radioactive", "toxic", "poisonous", "venomous", "disastrous", "grimy", "dirty", "undead", "bloodshot", "rusty", "glowing", "decaying",
      "rotten", "deadly", "plagued", "decimated", "rotting", "putrid", "decayed", "deserted", "acidic"];
      return apocalyptic;
    case "insulting":
      var insulting = ["stupid", "idiotic", "fat", "ugly", "hideous", "grotesque", "dull", "dumb", "lazy", "sluggish", "brainless", "slow", 
      "gullible", "obtuse", "dense", "dim", "dazed", "ridiculous", "witless", "daft", "crazy", "vapid", "inane", "mundane", "hollow", "vacuous",
      "boring", "insipid", "tedious", "monotonous", "weird", "bizarre", "backward", "moronic", "ignorant", "scatterbrained", "forgetful", "careless", 
      "lethargic", "insolent", "indolent", "loitering", "gross", "disgusting", "bland", "horrid", "unseemly", "revolting", "homely", "deformed",
      "disfigured", "offensive", "cowardly", "weak", "villainous", "fearful", "monstrous", "unattractive", "unpleasant", "nasty", "beastly", "snide", 
      "horrible", "syncophantic", "unhelpful", "bootlicking"];
      return insulting;
    case "praise":
      var praise = ["beautiful", "intelligent", "smart", "genius", "ingenious", "gorgeous", "pretty", "witty", "angelic", "handsome", "graceful",
      "talented", "exquisite", "enchanting", "fascinating", "interesting", "divine", "alluring", "ravishing", "wonderful", "magnificient", "marvelous",
      "dazzling", "cute", "charming", "attractive", "nifty", "delightful", "superior", "amiable", "gentle", "heroic", "courageous", "valiant", "brave", 
      "noble", "daring", "fearless", "gallant", "adventurous", "cool", "enthusiastic", "fierce", "awesome", "radical", "tubular", "fearsome", 
      "majestic", "grand", "stunning"];
      return praise;
    case "scientific":
      return scientific;
    default:
      return scientific;
  }
}

// Pulls noun out of array using random number sent from generator
// Removed extraneous scifi array from bottom of gA(x) and put variable in above switch(x) call
// changed getNoun to gN
function gN(y) {
      var scifi = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy", 
      "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars",
      "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus",
      "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
  switch(y) {
    case "animals": 
      var animals = ["flamingo", "hedgehog", "owl", "elephant", "pussycat", "alligator", "dachsund", "poodle", "beagle", "crocodile", "kangaroo", 
      "wallaby", "woodpecker", "eagle", "falcon", "canary", "parrot", "parakeet", "hamster", "gerbil", "squirrel", "rat", "dove", "toucan", 
      "raccoon", "vulture", "peacock", "goldfish", "rook", "koala", "skunk", "goat", "rooster", "fox", "porcupine", "llama", "grasshopper", 
      "gorilla", "monkey", "seahorse", "wombat", "wolf", "giraffe", "badger", "lion", "mouse", "beetle", "cricket", "nightingale", 
      "hawk", "trout", "squid", "octopus", "sloth", "snail", "locust", "baboon", "lemur", "meerkat", "oyster", "frog", "toad", "jellyfish", 
      "butterfly", "caterpillar", "tiger", "hyena", "zebra", "snail", "pig", "weasel", "donkey", "penguin", "crane", "buzzard", "vulture", 
      "rhino", "hippopotamus", "dolphin", "sparrow", "beaver", "moose", "minnow", "otter", "bat", "mongoose", "swan", "firefly", "platypus"];
      return animals;
    case "profession": 
      var professions = ["doctor", "lawyer", "ninja", "writer", "samurai", "surgeon", "clerk", "artist", "actor", "engineer", "mechanic",
      "comedian", "fireman", "nurse", "RockStar", "musician", "carpenter", "plumber", "cashier", "electrician", "waiter", "president", "governor", 
      "senator", "scientist", "programmer", "singer", "dancer", "director", "mayor", "merchant", "detective", "investigator", "navigator", "pilot",
      "priest", "cowboy", "stagehand", "soldier", "ambassador", "pirate", "miner", "police"];
      return professions; 
    case "fantasy": 
      var fantasy = ["centaur", "wizard", "gnome", "orc", "troll", "sword", "fairy", "pegasus", "halfling", "elf", "changeling", "ghost", 
      "knight", "squire", "magician", "witch", "warlock", "unicorn", "dragon", "wyvern", "princess", "prince", "king", "queen", "jester", 
      "tower", "castle", "kraken", "seamonster", "mermaid", "psychic", "seer", "oracle"];
      return fantasy;
    case "music":
      var music = ["violin", "flute", "bagpipe", "guitar", "symphony", "orchestra", "piano", "trombone", "tuba", "opera", "drums", 
      "harpsichord", "harp", "harmonica", "accordion", "tenor", "soprano", "baritone", "cello", "viola", "piccolo", "ukelele", "woodwind", "saxophone",
      "bugle", "trumpet", "sousaphone", "cornet", "stradivarius", "marimbas", "bells", "timpani", "bongos", "clarinet", "recorder", "oboe", "conductor",
      "singer"];
      return music;
    case "horror":
      var horror = ["murderer", "chainsaw", "knife", "sword", "murder", "devil", "killer", "psycho", "ghost", "monster", "godzilla", "werewolf", 
      "vampire", "demon", "graveyard", "zombie", "mummy", "curse", "death", "grave", "tomb", "beast", "nightmare", "frankenstein", "specter", 
      "poltergeist", "wraith", "corpse", "scream", "massacre", "cannibal", "skull", "bones", "undertaker", "zombie", "creature", "mask", "psychopath",
      "fiend", "satanist", "moon", "fullMoon"];
      return horror;
    case "gross":
      var gross = ["slime", "bug", "roach", "fluid", "pus", "booger", "spit", "boil", "blister", "orifice", "secretion", "mucus", "phlegm", 
      "centipede", "beetle", "fart", "snot", "crevice", "flatulence", "juice", "mold", "mildew", "germs", "discharge", "toilet", "udder", "odor", "substance", 
      "fluid", "moisture", "garbage", "trash", "bug"];
      return gross;
    case "everyday":
      var everyday = ["mirror", "knife", "fork", "spork", "spoon", "tupperware", "minivan", "suburb", "lamp", "desk", "stereo", "television", "TV",
      "book", "car", "truck", "soda", "door", "video", "game", "computer", "calender", "tree", "plant", "flower", "chimney", "attic", "kitchen",
      "garden", "school", "wallet", "bottle"];
      return everyday;
    case "jewelry":
      var jewelry = ["earrings", "ring", "necklace", "pendant", "choker", "brooch", "bracelet", "cameo", "charm", "bauble", "trinket", "jewelry", 
      "anklet", "bangle", "locket", "finery", "crown", "tiara", "blingBling", "chain", "rosary", "jewel", "gemstone", "beads", "armband", "pin",
      "costume", "ornnt", "treasure"];
      return jewelry;
    case "places":
      var places = ["swamp", "graveyard", "cemetery", "park", "building", "house", "river", "ocean", "sea", "field", "forest", "woods", "neighborhood",
      "city", "town", "suburb", "country", "meadow", "cliffs", "lake", "stream", "creek", "school", "college", "university", "library", "bakery",
      "shop", "store", "theater", "garden", "canyon", "highway", "restaurant", "cafe", "diner", "street", "road", "freeway", "alley"];
      return places;
    case "scifi":
      return scifi;
    default:
      return scifi;
  }
}
//appears to be some redundancy between generator and rNM functions, going to try and pull out some of this code so it's not pulling every time.
// changed adjectives to aJ
// changed lengthAdj to lAj
// changed nouns to nn
// changed lengthNoun to lNn

var aJ = ["dark", "color", "whimsical", "shiny", "noise", "apocalyptic", "insulting", "praise", "scientific"];  // types of aJ for pZ titles
var lAj = aJ.length;
var nn = ["animals", "everyday", "fantasy", "gross", "horror", "jewelry", "places", "scifi"];                        // types of nn for pZ titles
var lNn = nn.length;

// Generates random numbers for gA and gN functions and returns a new pZ n
// changed randomAdjective to rAj
// changed adj to a and noun to b in function call
// changed randomNoun to rNn
// changeed name to n
// changed generator to gR
function gR(a, b) {
  var aJ = gA(a);
  var nn = gN(b);
  var rAj = parseInt(Math.random()*lAj, 10);
  var rNn = parseInt(Math.random() * lNn, 10);
  var n = "The " + aJ[rAj].capitalize() + " " + nn[rNn].capitalize();
  return n;
};

// Chooses random adjective and random noun
// changed randomNumberAdj to rNaJ
// changed randomName to rNM
// changed randomNumberNoun to rNoN
function rNM() {
  var rNaJ = parseInt(Math.random() * lAj, 10);
  var rNoN = parseInt(Math.random() * lNn, 10);
  return gR(aJ[rNaJ], nn[rNoN]);
};

// These functions return a string of a random ingredient from each respective category of ingredients.
// changed selectRandommt to sRm
// changed randommt to rMt
var sRm = function() {
  var rMt = pI.m[Math.floor((Math.random() * pI.m.length))];
  return rMt;
}
// changed selectRandomnonmt to sRnM
// changed randomNonmt to rMnT
var sRnM = function() {
  var rMnT = pI.nm[Math.floor((Math.random() * pI.nm.length))];
  return rMnT;
}
// change selectrandomch to sRcH
// change randomch to rCh
var sRcH = function() {
  var rCh = pI.c[Math.floor((Math.random() * pI.c.length))];
  return rCh;
}
// change randomSauce to rS
// change selectRandomSauce to sRs
var sRs = function() {
  var rS = pI.s[Math.floor((Math.random() * pI.s.length))];
  return rS;
}
// changed selectRandomCrust to sRc
// changed randomCrust to rC
var sRc = function() {
  var rC = pI.cr[Math.floor((Math.random() * pI.cr.length))];
  return rC;
}
// changed ingredientItenizer to iI
// changes string to b
var iI = function(b) {
  return "<li>" + b + "</li>";
}

// Returns a string with random pZ ingredients nested inside <li> tags
// changed var makeRandompZ to mRp
// changed numberOfmts to nOm
// changed numberOfNonmts to nOnM
// changed numberOfchs to nOcH
// changed all instances of meat to mt and nonMeat to nmt
// changed all instancess of ch to ch

// changed all instances of pizza to pZ
var mRp = function() {
  var pZ = "";

  var nOm = Math.floor((Math.random() * 4));
  var nOnM = Math.floor((Math.random() * 3));
  var nOcH = Math.floor((Math.random() * 2));
  var mt = iI(sRm());
  var nmt = iI(sRnM());
  var ch = iI(sRcH());
  var sauce = iI(sRs());
  var crust = iI(sRc());

  for (var i = 0; i < nOm; i++) {
    pZ = pZ + mt;
  }

  for (var j = 0; j < nOnM; j++) {
    pZ = pZ + nmt;
  }

  for (var k = 0; k < nOcH; k++) {
    pZ = pZ + ch;
  }


  pZ = pZ + sauce;
  pZ = pZ + crust;

  return pZ;
}

// returns a DOM element for each pZ
// changed pizzaElementGenerator to pZeG
// changed pizzaContainer to pZc
var pZeG = function(i) {
  var pZc,             // contains pZ title, image and list of ingredients
      pZiC,        // contains the pZ image
      pZi,                 // the pZ image itself
      pZdC,  // contains the pZ title and list of ingredients
      pZn,                  // the pZ n itself
      ul;                         // the list of ingredients

  pZc  = document.createElement("div");
  pZiC = document.createElement("div");
  pZi = document.createElement("img");
  pZdC = document.createElement("div");

  pZc.classList.add("randompZc");
  pZc.style.width = "33.33%";
  pZc.style.height = "325px";
  pZc.id = "pZ" + i;                // gives each pZ element a unique id
  pZiC.classList.add("col-md-6");

  pZi.src = "images/pZ.png";
  pZi.classList.add("img-responsive");
  pZiC.appendChild(pZi);
  pZc.appendChild(pZiC);


  pZdC.classList.add("col-md-6");

  pZn = document.createElement("h4");
  pZn.innerHTML = randomn();
  pZdC.appendChild(pZn);

  ul = document.createElement("ul");
  ul.innerHTML = mRp();
  pZdC.appendChild(ul);
  pZc.appendChild(pZdC);

  return pZc;
}

// rPzS(size) is called when the slider in the "Our pZs" section of the website moves.
var rPzS = function(size) { 
  window.performance.mark("mark_start_resize");   // User Timing API function

  // Changes the value for the size of the pZ above the slider
  //took out document.querySelector command, didn't seem to negatively impact the js function on the page
  function cSl(size) {
    switch(size) {
      case "1":
        document.querySelector("#pizzaSize").innerHTML = "Small";
        return;
      case "2":
        document.querySelector("#pizzaSize").innerHTML = "Medium";
        return;
      case "3":
        document.querySelector("#pizzaSize").innerHTML = "Large";
        return;
      default:
        console.log("bug in changeSliderLabel");
    }
  }

  cSl(size);

  // Returns the size difference to change a pZ element from one size to another. Called by changepZSlices(size).
  function dDx (elem, size) {
    var oW = elem.offsetWidth;
    var wW = document.querySelector("#randomPizzas").offsetWidth;
    var oS = oW / wW;

    // TODO: change to 3 sizes? no more xl?
    // Changes the slider value to a percent width
    // Changes sizeSlider var to sS
    function sS (size) {
      switch(size) {
        case "1":
          return 0.25;
        case "2":
          return 0.3333;
        case "3":
          return 0.5;
        default:
          console.log("bug in sS");
      }
    }

    var nS = sS(size);
    var dx = (nS - oS) * wW;

    return dx;
  }

    // Iterates through pZ elements on the page and changes their widths
  function cPs(size) {
    var rPzS = document.querySelectorAll(".randompZc");
    
    // get dx and nW for 1st element only and then apply nW for the rest elements
    // Removed rPzS.length iteration from for loop
    var dx = dDx(rPzS[0], size);
    var nW = (rPzS[0].offsetWidth + dx) + 'px';
    var length = rPzS.length;
    for (var i = 0; i < length; i++) {
      rPzS[i].style.width = nW;
    }
  }

  cPs(size);

  // User Timing API is awesome
  window.performance.mark("mark_end_resize");
  window.performance.measure("measure_pZ_resize", "mark_start_resize", "mark_end_resize");
  var tTr = window.performance.getEntriesByn("measure_pZ_resize");
  console.log("Time to resize pZs: " + tTr[0].duration + "ms");
}

window.performance.mark("mark_start_generating"); // collect timing data

// This for-loop actually creates and appends all of the pZs when the page loads
var pZsD = document.getElementById("randompZs");
for (var i = 2; i < 100; i++) {
  pZsD.appendChild(pZeG(i));
}

// User Timing API again. These measurements tell you how long it took to generate the initial pZs
window.performance.mark("mark_end_generating");
window.performance.measure("measure_pZ_generation", "mark_start_generating", "mark_end_generating");
var tTg = window.performance.getEntriesByn("measure_pZ_generation");
console.log("Time to generate pZs on load: " + tTg[0].duration + "ms");

// Iterator for number of times the pZs in the background have scrolled.
// Used by uP() to decide when to log the average time per frame
var frame = 0;

// Logs the average amount of time per 10 frames needed to move the sliding background pZs on scroll.
function lAf(times) {   // times is the array of User Timing measurements from uP()
  var nE = times.length;
  var sum = 0;
  for (var i = nE - 1; i > nE - 11; i--) {
    sum = sum + times[i].duration;
  }
  console.log("Average time to generate last 10 frames: " + sum / 10 + "ms");
}

// The following code for sliding background pZs was pulled from Ilya's demo found at:
// https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html

// Moves the sliding background pZs based on scroll position
// updated for loop to remove extraneous e.length function and replaced with 40 max pZs for [i] since screen can only display 32
// took Math.sin(document.body.scrollTop) out of for Loop to remove constant reiteration since it's only necessary to call once and can be recalled as a variable

function uP() {
  frame++;
  var an = document.body.scrollTop;
  window.performance.mark("mark_start_frame");
  var k = document.querySelectorAll('.mover');
  for (var i = 0; i < 32; i++) {
    var p = Math.sin((an / 1250) + (i % 5));
    k[i].style.transform = 'translateX(' + (100 * p) + 'px)';
  }

  // User Timing API to the rescue again. Seriously, it's worth learning.
  // Super easy to create custom metrics.
  window.performance.mark("mark_end_frame");
  window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  if (frame % 10 === 0) {
    var tTp = window.performance.getEntriesByName("measure_frame_duration");
    lAf(tTp);
  }
}

// runs uP on scroll
window.addEventListener('scroll', uP);

// Generates the sliding pZs when the page loads.
document.addEventListener('DOMContentLoaded', function() {
  var a = 8;
  var s = 256;
  var m = document.querySelector("#movingPizzas1");

  for (var i = 0; i < 200; i++) {
    var elem = document.createElement('img');
    elem.classn = 'mover';
    elem.src = "images/pZ.png";
    elem.style.height = "100px";
    elem.style.width = "73.333px";
    elem.style.left = (i % cols) * s + 'px';
    elem.style.top = (Math.floor(i / a) * s) + 'px';
    m.appendChild(elem);
  }
  uP();
});