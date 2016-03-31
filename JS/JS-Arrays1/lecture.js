// var person = {
// firstName: 'Amar',
// lastName: 'Patel',
// age: 26,
// eye: 'brown',
// hair: 'black',
// location: 'Provo, UT'
// };
//
// var newFirstName = firstName;
//
// person[newFirstName];
//
// person['firstName'];
//
// var person2 = new Object({firstName: 'Erin'})
//
// person.title = 'God';
//
// var person3 = function(firstName, lastName, location) {
//   this.firstName = firstName,
//   this.lastName = lastName,
//   this.location = location
// }
//
// var bob = new person3('Bob', 'Dylan', 'NYC')
//
// //GOOGLE BUILT IN COINSTRUCTOR FUNCTIONS!!!!!
//
// var Car =
//   {make: 'benz',
//   model: 'S600',
//   seats: 5,
//   engine: 'v12',
//   color: 'blue'
//   }
//
//   var person = {
//     firstName: 'Amar',
//     lastName: 'Patel',
//     age: 26,
//     eye: 'brown',
//     hair: 'black',
//     location: 'Provo, UT',
//     changeName: function() {
//         return.this.firstName + this.lastName;
//       },
//       changeName: function(name) {
//         this.firstName = name;
//         }
//   }
//
//
//
//   for (var key in person) {
//     if (person[key] === "black") {
//       person[key] = 'brown';
//     }
//   }
//
//
//   for (var key in person) {
//     if(person.hasOwnProperty('hair')) {
//       if(person[key] === 'black'
//           person[key[ = 'black'
// }
// }
// }
//
//
// var module2 = (function() {
//     var privateMethod = function(name, age, location){
//         return name + ' ' + age + ' ' + location
//     };
//     // Anything that is being returned is made public and can be invoked from outside our lexical scope
//
//     return {
//         publicMethod: function (name,age,location) {
//             return privateMethod(name,age,location)
//         }
//     };
// })();
// module2.publicMethod('ben', 29, 'UTAH');
//
// var person = {
//   firstName: 'Amar',
//   lastName: 'Patel',
//   age: 26,
//   eye: 'brown',
//   hair: 'black',
//   location: 'Provo, UT',
//   fullName: function() {
//       return this.firstName + this.lastName;
//     },
//   changeName: function(name) {
//       return this.firstName = name;
//     }
// };
//
// person.changeName('Bob');
//
//
// console.log(person);
//
//

var users = [];

var user1 = {
  firstName: "Amar",
  lastName: "Patel"
}
var user2 = {
  firstName: "Anand",
  lastName: "Patel"
}

users.push(user1, user2);

for (var i = 0; i < users.length; i++) {
  console.log(users[i]);
  }

function removeItem(arr, item) {
  var index = arr.indexOf(item);
  if (index >= 0) {
    arr.splice(index, 1)
    }
    return arr
  }

function addItem(arr, item) {
  var index = arr.indexOf(item);
  if (index >= 0)


  }

  var users = [];

  var user1 = {
    firstName: "Amar",
    lastName: "Patel",
    email: "amarpatel1290@gmail.com",
    password: "password1"
  }

  var user2 = {
    firstName: "Anand",
    lastName: "Patel",
    email: "anandpatel5686@gmail.com",
    password: "password1"
  }

  var user3 = {
    firstName: "Bill",
    lastName: "Patel",
    email: "billpatel2262@gmail.com",
    password: "password1"
  }

  users.push(user1, user2, user3);

  function changeEmail(users, email, key, newEmail) {
    var i;
    for (i = 0; i < users.length; i++) {
      if(array[i][property] === email) {
        array[i].email = newEmail;
      }
    }
  }

  changeEmail(users, 'email', "billpatel2262@gmail.com", "yes")

  function deleteUser(users, 'name') {
    for (var i = 0; i < users.length; i++) {
      if (array[i][property] === name) {
        delete users[i];
      }
    }
  }
