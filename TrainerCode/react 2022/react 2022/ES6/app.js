//let  
// Allows to create block scope
 //ES 5
        var num = 10;	//Global Scope
        function testES5() {
            var num = 100;   // local scope
            console.log("value of num in test() " + num);   //100
        }
        console.log("value of num outside test() " + num); //10
        testES5();

        //ES 6
        "use strict"
        let name = 'Murthy' //global scope
        function testES6() {
            let num = 100;// local scope
            console.log("value of num in test() " + num)   //100 
            if (true) {
                var m = 10
                console.log("Inner Block begins")
                let num = 200  // Block scope
                const k = 10 
                console.log("value of num : " + num)   //200
            }
            console.log(m)//10
            console.log(k)//undefined
        }
        testES6()//calling function
        console.log(k)// undefined
        console.log('with let ' + num)  //?
        console.log(name)

        for (let i = 0; i < 5; i++) {
            console.log("i=" + i);
        }
        console.log("i=" + i);   // prints Uncaught ReferenceError: i is not defined


    //const for creating constants
     const x = 12;
        console.log(x);
        //const x = 13;
        if(true) { 
                const x = 13;
                const y = 11;
         }
         const y = 12;
         console.log(y);
         //--------------------------------------



         //forof loop
         //ES5
         var numbersArray = [1, 2, 3, 4];
         for (var n in numbersArray) {
            console.log(n);
         }
         //ES6     
          // es6 set style iterator syntax
        //no more index and length based looping in my code     
          for (let n of numbersArray) {
            console.log(n);
        }

        /* in Node express use like this
        for (var post of posts) {
            console.log(post.url);
        }
        */


//----------------------------------------------------------------------------
 //include
 const contrived_example = "This is one impressively contrived example!";
// does this string include the word impressively?
contrived_example.includes("impressively") // true
//---------------------------------------------------

//cb
let sum=(x=1,y=2) =>{
    return x+y;
}

console.log(sum(10,20));
window.setTimeout(()=>{
    console.log("welcome")
},1000)

//-------------------------------
//Spread operator
var peaks = ["Tallac", "Ralston", "Rose"]
var canyons = ["Ward", "Blackwood"]
var tahoe = [...peaks, ...canyons]
console.log(tahoe.join(', ')) // Tallac, Ralston, Rose, Ward, Blackwood

//-------------------------------


   //Template String
   let customerName = "Srirama Murthy"
    document.write(`
             <h1 style='background:yellow'>
             Hello  ${customerName}
             </h1>
             `)

 
    let getCustomer=(name)=>{
      return name;
    }
    console.log(`Hello ${getCustomer('Raj')}`)

    let message = `<h2 style='background-color:red'>
             ${customerName} - Please enter the password that
               has at least 8 characters and
               includes a capital letter</h2>
              `
    document.write(message)


    const template = 
    `
    <div class="${getClass()}">
      <h1>Example</h1>
        <p>I'm a pure JS & HTML template!</p>
    </div>
    `
    function getClass () {
        // Check application state, calculate a class based on that state
        return "some-stateful-class";
    }
    console.log(template); 

    /*
    Hello ${firstName},
    Thanks for ordering ${qty} tickets to ${event}.
    Order Details
    ${firstName} ${middleName} ${lastName}
    ${qty} x $${price} = $${qty*price} to ${event}
    You can pick your tickets up at will call 30 minutes before
    the show.
    Thanks,
    ${ticketAgent}
  */
    //----------------------------------------------------------------------------

    //Destructuring array and Object
    /*
    ES6 Destructuring assignment is especially 
    handy for pulling out separate functions &
     values from an  object
    */

    function getStock(){
        return {
            symbol: "Prathibhaa",
            price: 100.00
        };
    }
    // refer the keys only
    let {symbol, price} = getStock()
    console.log(`The price of ${symbol} is ${price}`)

// Destructuring of the nested object
    let msft = {
        symbol: "Yahoo",
        lastPrice: 50.00,
        exchange: {
            name: "NASDAQ",
            tradingHours: "9:30am-4pm"
        }
    };
    function printStockInfo(stock){
        let {symbol, exchange:{name}} = stock;
        console.log(`The ${symbol} stock is traded at ${name}`);
    }
    printStockInfo(msft);

    /* in Node express use like this
    var post = {
      url: '/first-post',
      title: 'My First Post'
    }

    var {url,title} = post;

    console.log('url', url, 'post', post);
    // => 'url', '/first-post', 'post', { url: '/first-post',title: 'My First Post' }

    */


    //-------------------------------------------------------

    //Object.Assign
     //------------Object.assign()
        /*

      // primitive type vs reference typy
      // number is primitive type
      // object is reference type
      var x=10;
      var y=x;
      y=20;
      console.log("x:"+x+" - y:"+y);  // x: 10 - y:20
      // Number is immutable by default


      // object is reference type 
      var a= {name:'sriram'};
      var b=a;
      b.name='murthy';
      console.log(a);//{object {name:'murthy'}}


               
        The Object.assign() method is used to copy the values of all enumerable own properties  from one or more source objects to a target object. It will return the target object. 
        */
       
       var det = { name:"Sriram", ID:"E1001" }; 
       var copy = Object.assign({}, det); 
       console.log(copy);  
       for (let val in copy) 
       { 
           console.log(copy[val]) 
       } 

       //filter
        var k=f.filter((val)=>val !==2);
        console.log(k) //[0,1]

        var m={name:'raj',things:[0,1,2]}
        var n=Object.assign({},m,{name:'Kavitha'})
        console.log(n.things); //[0,1,2]
        n.things=m.things.concat(3)
        console.log("m. things  "+m.things);//[0,1,2]
        console.log("n.things:"+n.things);//[0,1,2,3]
            //---------------------------------------------------------------------

//Functions in ES6
        //ES5
        var sum=function(x,y){
            return x+y;
            }

        //ES6 - Fat Arrow Operator (FAO)- Lambda
        let sum1 = (x, y) => {
        x  = x + 10
        y = y + 10 
        return x + y
        }
        console.log(sum1(10, 10)) //40



let polyglot = {
    name : "Murthy",
    languages : ["English", "French", "Italian", "German", "Polish"],
    introduce : function () {
        this.languages.forEach((language) => {
            console.log
             ("My name is " + this.name + ", and I speak " + language + ".");
        });
    }
};

        // example on scope with fat arrow
        window.age = 12; 
        function Person(){ 
        this.age = 34; 
        setTimeout(() => {
        console.log(this.age); //34
        }, 1000); 

        setTimeout(function(){
        console.log(this.age); //12
        }, 1000); 
        } 
        var p = new Person();

        // example on fat arrow
        function StockQuoteGenerator(symbol){
            this.symbol = symbol;
            setInterval(() => {
                        console.log("The price quote for " + this.symbol
                                + " is " + Math.random());
                    }, 1000);
        }
        var stockQuoteGenerator = new StockQuoteGenerator("IBM");
 
      /* In Node Express, use like this
      // single line arrow functions do not require braces or the "return" keyword
      app.get('posts', (req, res) => res.render('/posts.html') );

      // multi line arrow functions require braces
      app.get('posts', (req, res) => {
          console.log('in post route');
          res.render('/posts.html');
        }
      );
      */


        //-----------------------------------------------------------------

    //Default Parameters
        function add(a, b = 1) { 
            return a+b; 
        } 
            console.log(add(4)); 
            console.log(add(4,2)); // b overwritten by 2

            // REST params
       // rest operator
        function calcTaxES6(income, ...customers) {
            console.log("ES6. Calculating tax for customers with the income ", income);
            customers.forEach(function (customer) {
                console.log("Processing ", customer);
            });
        }
        calcTaxES6(50000, "Varun", "John", "David");
        calcTaxES6(750000, "Sri", "Rama");

        //Example 2
        var defaultPerson = {
            name: {
            first: "Sriram",
            last: "Murthy"
            },
            favActivity: "skiing"
            }
            function logActivity(p=defaultPerson) {
            console.log(`${p.name.first} loves ${p.favActivity}`)
            }

        //----------------------------------------------------------------------
//ES6 Collections (Map and Set)
// Map works with dictionery and set work with array

//<map 
  var map = new Map(); 
  map.set(1, 13); 
  map.set(2,20);
  map.set(1, 12); 
   console.log(map.has(1)); //true 
     console.log(map.get(1)); //12 
   map.delete(1); 
   //loop through the keys in an map 
   for(var i of map) { 
   console.log(i);
    } 
    map.clear();
    var map_1 = new Map([[1, 2], [4, 5]]); 
      console.log(map_1.size); //2"
    
//Set
var set = new Set(); 
   set.add({x: 12}); 
   set.add(44); 
   set.add("text");
    console.log(set.has("text")); 
    set.delete(44);
    for(var i of set) { 
     console.log(i); 
     } 
         var set_1 = new Set([1, 2, 3, 4, 5]); 
         console.log(set_1.size); //5
        var  set_2 = new Set(set.values());

// OOPS  - working with classes
class Student { 
    //constructor of the class
     constructor(name, age) { 
     //"this" points to the current object 
        this.name = name
        this._age = age  // private
     }
     //member function 
     ShowName(){ 
        return this.name
       } 
     AssignName(name) { 
        this.name = name 
      }
       //properties
     set age(value) {
      // validation, check roles,....
      console.log(value)
      this._age = value 
      }
     get age() {
      // check role=manager
      console.log("i am invoked")
      return this._age
       }
  }
   let s1=new Student('Sriram',45);
   console.log(s1.ShowName());
   s1.age=55;// setter
   console.log(s1.age);// getter

   
  //class person inherits student 
  class Person extends Student { 
       constructor(name, age, citizen) {
        // super should be the first statement in constructor
        super(name, age)
       //this points to the person class 
       this.citizen = citizen
       //call constructor of super class. "super" is an pointer to the super class object         
     } 
    getCitizen() { 
        return this.citizen
        } 
    //overriding
     ShowName(){ 
     //we are calling the super class ShowName() function
      return super.ShowName() 
      }
 }
    var stud = new Student("Kavitha", 40)
   var p = new Person("Srirama Murthy", 45, "India"); 
   console.log(p.ShowName());
   console.log(p.age)








//map, set, weakMap, Weakset
// We can think of foo as a key, and bar as a value.
const obj = { foo : 'bar' };
// The foo 'key' of obj has value 'bar'
obj.foo === 'bar'; // true
let scotch_inventory = new Map();
scotch_inventory.set('rum', 2);
console.log(scotch_inventory.size); // 2

console.log(scotch_inventory.get('The Dalmore')); // 1
console.log(scotch_inventory.has('The Dalmore')); // true
scotch_inventory.forEach(function (quantity, scotch) {
    console.log(`Excuse me while I sip this ${scotch}.`);
});


console.log(scotch_inventory.delete('The Dalmore')); // true -- breaks my heart
scotch_inventory.clear();
//scotch_inventory = new Map([['rum', 2], ['The Dalmore', 1]]);

//Weakmap

/*
A WeakMap is a map that doesn't prevent its keys from being garbage-collected.
 That means that you can associate data with objects without having to worry 
 about memory leaks.

In other words, if your program loses all external references to the keys
 of a WeakMap, it can garbage-collect their values.
 */


const cache = new WeakMap(); // No more memory leak!

// The rest is the same . . . 
/*
This way, when the application loses all references to the unneeded elements, 
the garbage collector can recycle them automagically. Nifty.

The API for WeakMap is similar to that of Map, with a few key differences:

1.  You can only use Object keys in a WeakMap. That means no Strings, 
and no Symbols.
2.  WeakMaps only have set, get, has, and delete methods -- that means 
you can't iterate over weak maps.
3.  WeakMaps don't have a size property.

The reason you can't iterate a WeakMap, or check its length, is because 
the garbage collector could run in the middle of your iteration: 
One moment, it'd be full. The next, empty.

That sort of unpredictable behavior is precisely what the TC39 sought
 to avoid in forbidding iteration and size-checks on WeakMaps.
*/

//set
let scotch_collection = new Set();
scotch_collection.add('Rum');
scotch_collection.add('The Dalmore');
// Remaining same methods like map

//WeakSet
/*
WeakSet is to Set as WeakMap is to Map. Like WeakMap:
1.  References to objects in a WeakSet are weakly-held.
2.  WeakSets do not have a size property.
3.  You can't iterate over a WeakSet.
Use cases for weak sets don't abound, but there are a few. 
*/

const foos = new WeakSet();

class Foo {
  constructor() {
    foos.add(this);
  }

  method() {
    if (!foos.has(this)) {
      throw new TypeError("Foo.prototype.method called on an incompatible object!");
    }
  }
}



