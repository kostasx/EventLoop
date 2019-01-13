# JAVASCRIPT INTERMEDIATE

#### Slides: <a href="https://kostasx.github.io/EventLoop/Education/TechTalentSchool/javascript/intermediate.html#/tts-intro" target="_blank">(click to open)</a>

#### Searching for JavaScript:

**W3Schools:** => Google for: `w3schools js alert`, `w3schools js String`, etc.

**MDN JS:** => Google for: `mdn js alert`, `mdn js String`, etc.

<details open>

<summary>JavaScript Intermediate Day 01</summary>

### BEST PRACTICES

- Place your variable and function declarations at the beginning of each scope, whether it is a function scope or a block scope.
- Assign values to variables before accessing them.
  ```
  function myApp(){

	// Declare and assign values first:
	let config = true;
    let name = "My App";
    function show(){ return 42; }

	// Rest of the code which calls the functions 
    // and accesses the variables declared above.
    console.log( name );
    show();

  }
  ```

### CODE

- ["use strict"](./code/usestrict.html)

### QUESTIONS

***What happens when we create a second variable and assign the same Object structure to it?***

- A new Object structure is created and linked to the newly created variable. The first variable holds a reference to a different (yet identical) Object structure in memory.
- [Visualisation](http://www.pythontutor.com/javascript.html#code=let%20obj%20%3D%20%7B%0A%20%20name%3A%20%22kostas%22,%0A%20%20surname%3A%20%22minaidis%22,%0A%20%20showName%3A%20function%28%29%7B%0A%20%20%20%20console.log%28%20this.surname%20%29%3B%20//%20We%20should%20always%20use%20this%0A%20%20%7D%0A%7D%0A%0Aconsole.log%28%20obj.surname%20%29%3B%0A%0Alet%20another%20%3D%20%7B%0A%20%20name%3A%20%22John%22,%0A%20%20surname%3A%20%22Doe%22%0A%7D%0A%0Aconsole.log%28%20another.surname%20%29%3B&curInstr=4&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D)

### REFERENCES

- ["use strict"](https://www.w3schools.com/js/js_strict.asp)
- [Watch: Custom sorting function for the Array sort() method @ `Coding Train`](https://youtu.be/MWD-iKzR2c8?t=171)
- [The Array `sort()` method at MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Copying Arrays using slice(): a visualization](http://www.pythontutor.com/javascript.html#code=let%20numbers%20%3D%20%5B%201,%202,%203,%204%20%5D%3B%0Alet%20reversedNumbers%20%3D%20numbers.slice%28%29%3B%0AreversedNumbers.reverse%28%29%3B%0Aconsole.log%28%20numbers%20%29%3B%0Aconsole.log%28%20reversedNumbers%20%29%3B&curInstr=5&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D) 
- [JavaScript Reserved Keywords](https://www.w3schools.com/js/js_reserved.asp)
- [How Arrays are `passed By Reference` (Visualisation)](http://www.pythontutor.com/javascript.html#code=let%20listOfNumbers%20%3D%20%5B%201,%202,%203,%204,%205%20%5D%3B%0A%0Alet%20pseudoCopy%20%3D%20listOfNumbers%3B%0A%0ApseudoCopy%5B1%5D%20%3D%20%22Ops!%22%3B%0A%0A&curInstr=3&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D) 
- [Understanding this in Objects (Visualisation)](http://www.pythontutor.com/javascript.html#code=let%20obj%20%3D%20%7B%0A%20%20name%3A%20%22kostas%22,%0A%20%20surname%3A%20%22minaidis%22,%0A%20%20showName%3A%20function%28%29%7B%0A%20%20%20%20console.log%28%20obj.surname%20%29%3B%20//%20We%20should%20always%20use%20this%0A%20%20%7D%0A%7D%0A%0Alet%20another%20%3D%20obj%3B%0Aobj%20%3D%205%3B%0A%0Aanother.showName%28%29%3B%0A&curInstr=6&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D)

</details>


### RESOURCES | TOOLS

- [JavaScript Errors Notifier Extension for Chrome](https://chrome.google.com/webstore/detail/javascript-errors-notifie/jafmfknfnkoekkdocjiaipcnmkklaajd?hl=en)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Live Server extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### RESOURCES | LEARNING
 
- [SoloLearn JavaScript Tutorial](https://www.sololearn.com/Course/JavaScript/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Tutorial](http://www.javascripttutorial.net/)
- [The JavaScript Handbook, by Flavio Copes](https://flaviocopes.com/page/ebooks/)
