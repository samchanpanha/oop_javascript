//1 object
/** Any real time entity is considered as an Object. Every Object will have some properties and functions. For example, consider a person as an object, then he will have properties like name, age, etc., and functions such as walk, talk, eat, think, etc. now let us see how to create objects in JavaScript. As mentioned previously there are so many ways to create objects in JavaScript like:*/
//1)Creating Object through literal
var obj = {};
//2)Creating with Object.create
var obj = Object.create(null);
//3)Creating using new keyword
function Person() {}
var obj = new Person();

//======================================
//2) Class
/** As I said earlier there are no classes in JavaScript as it is Prototype based language. But we can simulate the class concept using JavaScript functions.*/
function Person() {
    //Properties
    this.name = "Ben";
    this.age = "18";
    //functions
    this.sayHi = function() {
      return this.name + " Says Hi";
    };
  }
  //Creating person instance
  var p = new Person();
  alert(p.sayHi());

//======================================
// 3) Constructor
/** Actually, Constructor is a concept that comes under Classes. The constructor is used to assign values to the properties of the Class while creating an object using the new operator. In above code we have used name and age as properties for Person class, now we will assign values while creating new objects for Person class as below.*/
function Person(name, age) {
    //Assigning values through constructor
    this.name = name;
    this.age = age;
    //functions
    this.sayHi = function() {
      return this.name + " Says Hi";
    };
  }
  //Creating person instance
  var p = new Person("Ben", 18);
  alert(p.sayHi());
  //Creating Second person instance
  var p = new Person("Mel", 21);
  alert(p.sayHi());
//======================================
/**4) Inheritance */
/**Inheritance is a process of getting the properties and function of one class to other class. For example, let’s consider Student Class, here the Student also has the properties of name and age which have been used in Person class. So it’s much better to acquiring the properties of the Person instead of re-creating the properties. Now let’s see how we can do the inheritance concept in JavaScript. */
function Student() {}
//1)Prototype based Inhertance
Student.prototype = new Person();
//2)Inhertance throught Object.create
Student.prototype = Object.create(Person);
var stobj = new Student();
alert(stobj.sayHi());

//======================================

// 5) Encapsulation
/**Before going on to Encapsulation and Abstraction first we need to know what Data Hiding is and how can we achieve it in JavaScript. Date hiding is protecting the data from accessing it outside the scope. For example, In Person class, we have Date of Birth (DOB) properties which should be protected. Let’s see how to do it. */
function Person() {
    //this is private variable
    var dob = "17/06/2002";
    //public properties and functions
    return {
      age: "18",
      name: "Ben",
      getDob: function() {
        return dob;
      }
    };
  }
  var pobj = new Person();
  //this will get undefined
  //because it is private to Person
  console.log(pobj.dob);
  //Will get dob value we using public
  //funtion to get private data
  console.log(pobj.getDob());
/**Wrapping up of public and private data into a single data unit is called Encapsulation. The above example is the one that best suites Encapsulation. */
//======================================
// 6) Abstraction
/**Abstraction means hiding the inner implementation details and showing only outer details. To understand Abstraction we need to understand Abstract and Interface concepts from Java. But we don’t have any direct Abstract or Interface in JS. Ok! now in order to understand abstraction in JavaScript lets takes an example from JavaScript library Jquery. In Jquery we will use */
$("#ele");
/**to select select an element with id ele on a web page. Actually this code calls negative JavaScript code */
document.getElementById("ele");
/**But we don’t need to know that we can happy use the $("#ele") without knowing the inner details of the implementation. */

//======================================

// 7) Polymorphism
/**The word Polymorphism in OOPs means having more than one form. In JavaScript an Object, Property, Method can have more than one form. Polymorphism is a very cool feature for dynamic binding or late binding. */
function Person() {
    this.sayHI = function() {};
  }
  //This will create Student Class
  function Student() {}
  Student.prototype = new Person();
  Student.prototype.sayHI = function(l) {
    return "Hi! I am a Student";
  };
  //This will create Teacher Object
  function Teacher() {}
  Teacher.prototype = new Person();
  Teacher.prototype.sayHI = function() {
    return "Hi! I am a Teacher";
  };
  var sObj = new Student();
  //This will check if the student
  //object is instance of Person or not
  //if not it won't execute our alert code.
  if (sObj instanceof Person) {
    alert("Hurry! JavaScript supports OOps");
  }





