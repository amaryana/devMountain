var data = [1,2,3,4,5];

_.each(data, function(item) {
 item = item + 5;
 console.log(item)
})

var cars = [
 "bmw",
 "mercedes",
 "toyota"
]

var transformers = _.map(cars, function(item) {
 return {
   orgiinalCar: item,
   transformerName: item + " prime"
 }
})

console.log(transformers);


var names = [
 {
   first: "Jeremy",
   middle: "M",
   last: "Robertson"
 },
 {
   first: "Big",
   middle: "",
   last: "Bird"
 },
 {
 first: "John",
 middle: "B",
 last: "Jovi"
 }
]

var mergedNames = _.map(names, function(nameObj){
 return nameObj.last + ", " + nameObj.first + " " + nameObj.middle;
})

console.log(mergedNames);


var newNames = [];
for (var i = 0; i < names.length; i++){
 var nm = names[i];
console.log(nm.first)

 newNames.push(nm.last + ", " + nm.first + " " + nm.middle);
}

console.log(newNames);

var animal = {
  name: "Bobo",
  sound: "Ooo Ooo",
  diet: "fruits and insects",
  species: "monkey"
}

var Animal = function(name, sound, diet, species) {
  // this = {}
  this.name = name,
  this.sound = sound,
  this.diet = diet,
  this.species = species
  // return this
}

Animal.prototype.makeSound = function() {
  console.log(this.species + " says" + this.sound);
}

var animalData = [ {
  name: "Bobo",
  sound: "Oooo",
  diet: "bugs, bananas",
  species: "Monkey"
}, {
  name: "Charles",
  sound: "rmfffffff",
  diet: "plants, nuts",
  species: "Elephant"
},
 {
  name: "Terry",
  sound: "roar",
  diet: "meat",
  species: "Tiger"
}]

var Bobo = new Animal(animalData[0].name, animalData[0].sound, animalData[0].diet, animalData[0].species)

var animalObjects = _.map(animalData, function(animalInfo) {
  return new Animal(animalInfo.name, animalInfo.sound, animalInfo.diet, animalInfo.species)
}

// var boboTheMonkey = new Animal("Bobo", "Ooo Ooo", "fruits and insects", "monkey");

// console.log(boboTheMonkey);

// var charlesTheElephant = new Animal("Charles", "rmfffffff", "plants, nuts", "Elephant");

// console.log(charlesTheElephant);


var Animal = function(name, sound, diet, species){

  this.name = name;
  this.sound = sound;
  this.diet = diet;
  this.species = species;
}

Animal.prototype.makeSound = function(){
    console.log( this.species + " says " + this.sound );
}




var animalData = [ {
  name: "Bobo",
  sound: "Ooo Ooo",
  diet: "bugs, bananas",
  species: "Monkey"
}, {
  name: "Charles", sound: "rmfffffff", diet: "Peanuts, hay", species: "Elephant"
},
 {
  name: "Steve", sound: "squak", diet: "bugs, fish", species: "Flaminco"
}]


var bobo = new Animal(animalData[0].name, animalData[0].sound, animalData[0].diet, animalData[0].species)

bobo.makeSound()


// var animalObjects = _.map(animalData, function(animalInfo){
//    return new Animal(animalInfo.name, animalInfo.sound, animalInfo.diet, animalInfo.species);
// })

// console.log(animalObjects)


var bands = [
  {
    name: "Joe",
    email: "Joe@Icansingreallyhigh.com",
    artist: "Queen"
  },
  {
    artist: "LedZepplin",
    email: "DeadMepplin@gmail.com",
    name: "Dead Mepplin"
  },
  {
    artist: "DavidBowie",
    name: "Johnny Depp",
    email: "Imnotreallyhim@johnnydeppfan.com"
  },
  {
    name: "Joe",
    email: "Joe@Icansingreallyhigh.com",
    artist: "Queen"
  },
  {
    artist: "LedZepplin",
    email: "DeadMepplin@gmail.com",
    name: "Dead Mepplin"
  },
  {
    artist: "DavidBowie",
    name: "Johnny Depp",
    email: "Imnotreallyhim@johnnydeppfan.com"
  },
  {
    name: "Joey",
    email: "Joe@Icansingreallyhigh.com",
    artist: "BritneySpears"
  },
  {
    artist: "LedZepplin",
    email: "DeadMepplin@gmail.com",
    name: "Dead Mepplin"
  },
  {
    artist: "DavidBowie",
    name: "Johnny Mepp",
    email: "Imnotreallyhim@johnnydeppfan.com"
  },
   {
    artist: "DavidBowie",
    name: "Johnny Gepp",
    email: "Imnotreallyhim@johnnydeppfan.com"
  },
   {
    artist: "DavidBowie",
    name: "Johnny Smepp",
    email: "Imnotreallyhim@johnnydeppfan.com"
  }
];

function countCoverBands(coverRequests){
  /*
    var bands = {}

    var artist
    var artistCoutn

    for coverRequests
      increment artistCount


    return bands
  */

  var bands = {}

  for(var i = 0; i < coverRequests.length; i++){
    var request = coverRequests[i];

    if(bands.hasOwnProperty(request.artist)){
        bands[request.artist] += 1;
    } else {
        bands[request.artist] = 1;
    }
  }

  return bands;
}

var totalResults = countCoverBands(bands);

console.log("total", totalResults)


function countCoverBands2(coverRequests){
  var bands = []

  for(var i = 0; i < coverRequests.length; i++){
    var request = coverRequests[i];

    var existingBand = null;
    for(var j = 0; j < bands.length; j++){
        if(bands[j].artist === request.artist){
            existingBand = bands[j];
            break;
        }
    }

    if(existingBand){
        existingBand.count += 1;
    } else {
        bands.push({
            artist: request.artist,
            count: 1
        });
    }
  }

  return bands;
}
