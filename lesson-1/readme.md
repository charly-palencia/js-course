#Lesson 1

## what is javascript?

*JavaScript* is a programming language that allows you to implement complex things on web pages



### Example 1
Reference from JavaScript [First steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash)

  Upon looking at this brief, the first thing we can do is to start breaking it down into simple actionable tasks, in as much of a programmer mindset as possible:

  1. Generate a random number between 1 and 100.
  2. Record the turn number the player is on. Start it on 1.
  3. Provide the player with a way to guess what the number is.
  4. Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
  5. Next, check whether it is the correct number.
  6. If it is correct:
    1. Display congratulations message.
    2. Stop the player from being able to enter more guesses (this would mess the game up).
    3. Display control allowing the player to restart the game.
  7. If it is wrong and the player has turns left:
    1. Tell the player they are wrong.
    2. Allow them to enter another guess.
    3. Increment the turn number by 1.
  8. If it is wrong and the player has no turns left:
    1. Tell the player it is game over.
    2. Stop the player from being able to enter more guesses (this would mess the game up).
    3. Display control allowing the player to restart the game.
  9. Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.

#### Concepts

[Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
[querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
[querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
[addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
[removeChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)

## Why is javascript's functions nature important?

Functions and functional concepts are so importnat in js is because the function is the primary modular unit of execution.

we are going to handle our js function as a first-class object. what is a first class object?

let's talk about some js function capabilities:

* They can created via literals
* They can be assigned to variables, array entries, and properties of other objects.
* They can be passed as arguments to functions
* They can be returned as values from functions

e.g

```javascript
  //literal
  function(){}
  //assigned to variables, array entries and properties of other objects
  const fn = function(){};
  //They can be passed as arguments to functions
  const array = [function(){}, function(){}];
  //They can be returned as values from functions
  callSomeFunction(fn);
  const result = function(name){
    return function() { console.log('hi' + name); };
  };
```

the js function can be treated like any other object in the language (array, hash, int). therefore, we can say they are a `first-class` object.
[reference book secrets of js ninjas chapter 3](https://www.amazon.es/Secrets-JavaScript-Ninja-John-Resig/dp/193398869X)

## What is a asynchronous?

Asynchronous code takes statements outside of the main program flow, allowing the code after the asynchronous call to be executed immediately without waiting.

## So, js is asynchronouns?

hmm, almost, javascript use a single thread for the js engine runtime. it means that all the process that we are doing are synchronouns (all of them).

e.g
run it into [jsfiddle](https://jsfiddle.net/)

```typescript
  console.log('first one')
  setTimeout(function(){
    console.log('inside')
  }, 0);

  for(var start = 1; start < 6000000000; start++) {
  }

  console.log('Second one')
```

It doesn't matter if send a js asyncronous function sunch a `setTimeout`. the js runtime engine has to finish the for and then run the next function (`console.log`). Then, when the stack is empty we will see the `inside` message from the setTimeout. so

### now, what is a js engine?
reference: [A guide to javascript for idiots](https://developer.telerik.com/featured/a-guide-to-javascript-engines-for-idiots/)

The basic job of a JavaScript engine, when all is said and done, is to take the JavaScript code that a developer writes and convert it to fast, optimized code that can be interpreted by a browser or even embedded into an application.

what is contain into a js engine?

[Google reference](https://cdn-images-1.medium.com/max/1600/1*OnH_DlbNAPvB9KLxUCyMsA.png)

*Heap*: Objects are allocated in a heap which is just a name to denote a large mostly unstructured region of memory.

*Stack*: Function calls form a stack of frames

One example of this is showing is when our chrome tab is frezzed because we are still waiting for a heavy process.


### so, who is running the `setTimeout` method?

the browser is doing all those asyncronous functions for you using the parts below:

#### [Web API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)

Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to create complex functionality more easily. They abstract more complex code away from you, providing some easier syntax to use in its place.

Browser Web APIs- threads created by browser implemented in C++ to handle async events like DOM events, http request, setTimeout, etc.[reference](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec)

#### The Event Table & Event Queue
here is where found all the callbacks after they were trigger for some listener or any request response etc. from the web api threads.

*note*
Whenever we setup a function to be called at a later time, wheter by the browser or other code, we're setting up what is termed a callback. call-back


#### [event loop](https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40)
This is a constantly running process that checks if the call stack is empty

[how it looks like](http://prashantb.me/content/images/2017/01/js_runtime.png)

E.g

[Loupe tool](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

```javascript
  function foo(b) {
    var a = 10;
    return a + b + 11;
  }

  function bar(x) {
    var y = 3;
    return foo(x * y);
  }

  console.log(bar(7)); //returns 42
```

```javascript
  console.log('First one')
  setTimeout(function(){
    console.log('inside')
  }, 0);

  for(var start = 1; start < 10; start++) {
  }

  console.log('Second one')
```
