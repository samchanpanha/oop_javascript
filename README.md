# oop_javascript
Object Oriented Programming is one of the most popular ways in programming. Before OOP’s, list of instructions will be executed one by one. But in OOP’s we are dealing with Objects and how those objects interact with one another.

JavaScript supports Object Oriented Programming but not in the same way as other OOP languages(C++, PHP, Java, etc.) do.

The main difference between JavaScript and the other languages is that there are no Classes in JavaScript whereas Classes are very important for creating objects. However, there are ways through which we can simulate the Class concept in JavaScript. Another important difference is Data Hiding. There is no access specifier like (public, private and protected) in JavaScript but we can simulate the concept using the variable scope in functions.

Object Oriented Programming Concepts
1) Object
2) Class
3) Constructor
4) Inheritance
5) Encapsulation
6) Abstraction
7) Polymorphism
Preparing the workspace
Create a new file oops.html and write this code on it. We will write all our JavaScript code on this file.
1) Object
Any real time entity is considered as an Object. Every Object will have some properties and functions. For example, consider a person as an object, then he will have properties like name, age, etc., and functions such as walk, talk, eat, think, etc. now let us see how to create objects in JavaScript. As mentioned previously there are so many ways to create objects in JavaScript like:

We can use any of the above ways to create Object.

2) Class
As I said earlier there are no classes in JavaScript as it is Prototype based language. But we can simulate the class concept using JavaScript functions.

3) Constructor
Actually, Constructor is a concept that comes under Classes. The constructor is used to assign values to the properties of the Class while creating an object using the new operator. In above code we have used name and age as properties for Person class, now we will assign values while creating new objects for Person class as below.

4) Inheritance
Inheritance is a process of getting the properties and function of one class to other class. For example, let’s consider Student Class, here the Student also has the properties of name and age which have been used in Person class. So it’s much better to acquiring the properties of the Person instead of re-creating the properties. Now let’s see how we can do the inheritance concept in JavaScript.

We can do inheritance in above two ways.

5) Encapsulation
Before going on to Encapsulation and Abstraction first we need to know what Data Hiding is and how can we achieve it in JavaScript. Date hiding is protecting the data from accessing it outside the scope. For example, In Person class, we have Date of Birth (DOB) properties which should be protected. Let’s see how to do it.

Wrapping up of public and private data into a single data unit is called Encapsulation. The above example is the one that best suites Encapsulation.

6) Abstraction
Abstraction means hiding the inner implementation details and showing only outer details. To understand Abstraction we need to understand Abstract and Interface concepts from Java. But we don’t have any direct Abstract or Interface in JS. Ok! now in order to understand abstraction in JavaScript lets takes an example from JavaScript library Jquery. In Jquery we will use

But we don’t need to know that we can happy use the $("#ele") without knowing the inner details of the implementation.

7) Polymorphism
The word Polymorphism in OOPs means having more than one form. In JavaScript an Object, Property, Method can have more than one form. Polymorphism is a very cool feature for dynamic binding or late binding.

Conclusion
JavaScript supports Object Oriented Programming(OOP)Concepts. But it may not be the direct way. We need to create some simulation for some concepts.

