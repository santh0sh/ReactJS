// OOPS  - working with classes in ES6
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
