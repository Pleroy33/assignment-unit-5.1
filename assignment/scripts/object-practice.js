console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Paul', //
  lastName: 'LeRoy',
  hasSiblings:true,
  shoeCount: 15,
  favThreeFoods: ['coffee','pickles','hashbrowns']

};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
fullName = me.firstName + ' ' +me.lastName;// created fullName and accessed firstName and lastName of object me.
console.log(fullName);// console logged fullName, expected output is "Paul LeRoy"

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log(me.favThreeFoods[0]); //console logged faveThreeFoods at index zero of oject litteral me.  expected output: 'coffee'
console.log(me.favThreeFoods[2]); //console logged faveThreeFoods at index two of object literal me. expected output: 'hashbrowns'


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log(me.shoeCount);// logged existing shoeCount
me.shoeCount = me.shoeCount + 1;//added 1 to shoeCount
console.log(me.shoeCount);// logged shoeCount again to verify, expected: 16


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'Purple';//added favoriteColor purple to object me.
console.log(me.favoriteColor);//logged it, expected: Purple