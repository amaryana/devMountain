var test = [1,2,3,4,5,6,7,8]

function sl(arr, startIndex, endIndex) {
  var newArr = []
  for (var i = startIndex; i < endIndex; i++) {
    newArr.push(arr[i]);
    }
  return newArr;
  }

sl(test, 3, 5);

var sayName(name) {
  console.log(name)
}
sayName("Amar");

function  fireWeapon() {
    if (this === player) {
    console.log(this.weapon.name)
    }
}
var player = {
    name: 'Batman',
    weapon : {
        name: 'Mind'
    },
  attack: fireWeapon
};
var player2 = {
    name: 'Iron Man',
    weapon : {
        name: 'Suit'
    },
  attack: fireWeapon
};
player.attack();
player2.attack();


var person = {
    name: 'Amar',
    age: 26,
    location: 'Provo',
    getInfo: function() {
      console.log(this.name + ", " + this.age)
    }
};

person.getInfo();

function  fireWeapon(range, power) {
    console.log(range);
    console.log(power);
    console.log(this.weapon.name)
    }

var player = {
    name: 'Batman',
    weapon : {
        name: 'Batarang'
    }
};



fireWeapon.call(player,10,300);

function multiplier(multiplyBy) {
  return this.val * multiplyBy;
}

var result = multiplier.bind({
  val: 30
});
result(2);

function Player(playerName, weaponName) {
  this.name = playerName;
  this.weapon = weaponName;
}
var player2 = new Player('sumoMan', {name: 'Big Belly'})
