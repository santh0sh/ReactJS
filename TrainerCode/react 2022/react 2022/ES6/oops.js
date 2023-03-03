
//-----------------------------------------------
"use strict";

// Enforcing constructor call
function Food (name, protein, carbs, fat) {
    // Manually call 'new' if user forgets
    if (!new.target)
        return new Food(name, protein, carbs, fat); 

    this.name    = name;
    this.protein = protein;
    this.carbs    = carbs;
    this.fat          = fat;
}

const fish = Food('Halibut', 26, 0, 2); // Oops -- but, no problem!
fish; // 'Food {name: "Halibut", protein: 20, carbs: 5, fat: 0}'
//-----------------------------------------------------------
//Static methods

"use strict";

class Food {
     // Class definition is the same as before . . . 

     // Adding a static method
     static describe () {
       console.log('"Food" is a data type for storing macronutrient information.');
      }
}

Food.describe(); // '"Food" is a data type for storing macronutrient information.'
//-------------------------

"use strict";

class Food {
     // Class definition is the same as before . . . 

     // Adding a static method
     static describe () {
       console.log('"Food" is a data type for storing macronutrient information.');
      }
}

Food.describe(); // '"Food" is a data type for storing macronutrient information.'
//Static methods are analogous to attaching properties directly to old-school functions-as-constructors:

"use strict";

function Food (name, protein, carbs, fat) {
    Food.count += 1;

    this.name    = name;
    this.protein = protein;
    this.carbs    = carbs;
    this.fat          = fat;
}

Food.count = 0;
Food.describe = function count () {
       console.log(`You've created ${Food.count} food(s).`);
};

const dummy = new Food();
Food.describe(); // "You've created 1 food."
//------------------------------------------------
"use strict";

// Using ES6:
class Food {

    constructor (name, protein, carbs, fat) {
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
    }

    toString () {  
    return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`; 
    }

    print () {  
    console.log( this.toString() );  
    }
}

// In ES5:
function Food  (name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
}

// The name "prototype methods" presumably comes from the fact that we 
//    used to attach such methods to the '.prototype' old-school functions-as-constructors.
Food.prototype.toString = function toString () {
    return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`; 
};

Food.prototype.print = function print () {
    console.log( this.toString() ); 
};
//----------------------------------------------------
"use strict";

class Range {

  constructor(from, to) {
    this.from = from;
    this.to   = to;
  }

  * generate () {
    let counter = this.from,
        to      = this.to;

    while (counter < to) {
      if (counter == to)
        return counter++;
      else
        yield counter++;
    }
  }
}

const range = new Range(0, 3);
const gen = range.generate();
for (let val of range.generate()) {
  console.log(`Generator value is: ${ val }. `);
  //  Prints:
  //    Generator value is: 0.
  //    Generator value is: 1.
  //    Generator value is: 2.
}
//----------------------------------------


"use strict";

// Extending Array lets us use 'length' in an intuitive way,
//   and also gives us access to built-in array methods, like 
//   map, filter, reduce, push, pop, etc.
class FoodSet extends Array {

    // ...foods collects arbitrary number of arguments into an array
    //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
    constructor(...foods) {
        super();
        this.foods = [];
        foods.forEach((food) => this.foods.push(food))
    }

     // Custom iterator behavior. This isn't very *useful* iterator behavior, mind you, but it's a fine example.
     // The asterisk *must* precede the name of the key.
     * [Symbol.iterator] () {
        let position = 0;
        while (position < this.foods.length) {
          if (position === this.foods.length) {
              return "Done!"
          } else {
              yield `${this.foods[ position++ ]} is the food item at position ${position}`;
          }
         }
     }

      // Return an object of type Array, rather than type FoodSet, when users
      //   use built-in array methods. This makes our FoodSet interoperable
      //   with code expecting an array.
      static get [Symbol.species] () {
          return Array;
      }
}

const foodset = new FoodSet(new Food('Fish', 26, 0, 16), new Food('Hamburger', 26, 48, 24));

// When you use for . . . of with a FoodSet, JavaScript will iterate using the function you 
//    assoiated with the key [Symbol.iterator].
for (let food of foodset) {
  // Prints all of our foods
  console.log( food );
}

// JavaScript creates and returns a new object when you `filter` on an array, 
//    which it creates using the default constructor of the object you execute `filter` on.
//
//    Since most code would expect filter to return an Array, we can tell JavaScript
//       to use the Array constructor when implicitly creating a new instance by 
//       overriding [Symbol.species].
const healthy_foods = foodset.filter((food) => food.name !== 'Hamburger');

console.log( healthy_foods instanceof FoodSet ); // 
console.log( healthy_foods instanceof Array );