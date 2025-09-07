# SOLID OOPS Principles

## **Single Responsibility Principle**

Every class should have a single responsibility, and that responsibility should be entirely encapsulated by the class.

### **Rules of Thumb?**

If you cannot come up with a meaningful name for your class focused on single responsibility, then it's probably doing too much.

Every object in our web application should have a single responsibility, and all object's services should be focused on carrying that single responsibility(SRP).

If you put more than one functionality in one Class in Java it introduces coupling between two functionality and even if you change one functionality there is a chance you broke coupled functionality, which requires another round of testing to avoid any surprise on the production environment.

## **Open Closed Principle**
Software entities like classes, modules, and functions should be open for extension but closed for modifications.

### **Rules of Thumb?**

Open to an extension - you should design your classes so that new functionality can be added as new requirements are generated.

Closed for modification - Once you have developed a class you should never modify it, except to correct bugs.

Design and code should be done in a way that new functionality should be added with minimum or no changes in the existing code

When needs to extend functionality - avoid tight coupling, don't use if-else/switch-case logic, do code refactoring as required.

Techniques to achieve - Inheritance, Polymorphism, Generics

Pattern to apply – Strategy Pattern, Template Method

## **Liskov's Substitution Principle**

Derived types must be completely substitutable for their base types.

### **Rules of Thumb?**

This principle applies to inheritance hierarchies and is just an extension of the Open Close Principle.

It means that we must make sure that new derived classes are extending the base classes without changing their original behavior. Basically, derived classes should never do less than their base class.

If a subtype of the supertype does something that the client of the supertype does not expect, then this is in violation of LSP. Imagine a derived class throwing an exception that the superclass does not throw, or if a derived class has some unexpected side effects. One has to consider that how the client programs are using the class hierarchy. Sometimes code refactoring is required to fix identified LSP violations.

## **Interface Segregation Principle**

The Interface Segregation Principle states that clients should not be forced to implement interfaces they don't use. ISP splits interfaces that are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest to them.

### **Rules of Thumb?**

Don’t depend on things you don’t need. Interfaces containing methods that are not specific to it are called polluted or fat interfaces. We should avoid them.

Many client-specific interfaces are better than one general-purpose interface. When we have non-cohesive interfaces, the ISP guides us to create multiple, smaller, cohesive interfaces.

## **Dependency Inversion Principle**

High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.

### **Rules of Thumb?**

Design by contract.

Every dependency in the design should target an interface or an abstract class. No dependency should target a concrete class.

Factories and Abstract Factories can be used as dependency frameworks, but there are specialized frameworks for that such as Spring IOC (Inversion of Control Container).

