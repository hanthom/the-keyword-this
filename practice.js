//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      The purpose of the this keyword is to be able to use context within our coding without directly referencing everything. This allows us to make use of constructors and prototype, among other things, to help simplify our code.
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      Implicit Binding - 
      Explicit Binding - 
      new Binding - 
      Default Binding - 
  // 3) What is the difference between call and apply?

      //Answer
      You use call when you are taking a function outside of an object and using the properties within the object for running that function.  As for Apply, the method calls a function with a given this value and arguments provided as an array.
  // 4) What does .bind do?
      
      //Answer
      .Bind will take a method from another object and use for this the context of a different object.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: 'hanthom',
  email: 'hanthom@gmail.com',
  getUsername: function() {
    return this.username;
  }
}
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
console.log(user.getUsername());

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
function Car(brand, make, year) {
  this.brand = brand;
  this.make = make;
  this.year = year;
  this.move = 0;
  }
Car.prototype.moveCar = function() {
  return this.move+=10;
};
var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here
console.log(getYear.call(prius));
console.log(prius);


//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername.bind(user), 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here
  Undefined
//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  It is not bound to anything and is thus undefined.
//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
