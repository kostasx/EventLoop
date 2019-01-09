# JAVASCRIPT FUNDAMENTALS

#### Slides: <a href="https://kostasx.github.io/EventLoop/Education/TechTalentSchool/javascript/introduction.html#/tts-intro" target="_blank">(click to open)</a>

#### Searching for JavaScript:

**W3Schools:** => Google for: `w3schools js alert`, `w3schools js String`, etc.

**MDN JS:** => Google for: `mdn js alert`, `mdn js String`, etc.

<details>

<summary>JavaScript Day 01</summary>

### What can you build with JavaScript?

- [Dynamic HTML Pages](https://www.w3schools.com/js/)
- Web Applications:
    - [Photopea: A Photoshop Clone](https://www.photopea.com/) 
- Desktop Applications (Using [Electron.JS](https://electronjs.org/))
    - [Skype](https://www.skype.com/en/)
    - [Slack](https://slack.com/)
    - [Visual Studio Code](https://code.visualstudio.com/)
- [Mobile Apps](https://facebook.github.io/react-native/)
- [Server Applications](https://nodejs.org/en/)
- [Command Line Tools](https://developer.atlassian.com/blog/2015/11/scripting-with-node/)
- [Electronics (Arduino)](https://www.espruino.com/)  
- [Artificial Intelligence / Machine Learning](https://js.tensorflow.org/)
- [Brain Controlled Applications!](https://www.youtube.com/watch?v=7KhFO-qCVyg)    
    
### CODE

- Hello World
    - [hello.html](./code/hello.html)
    - [hello.js](./code/hello.js)
- [Strings](./code/strings.html)
- [Numbers](./code/numbers.html)
- [typeof Operator](./code/typeof.html)

### QUESTIONS

***How do we clear the console?***

- Click the `Clear Console` Button
- Press `Ctrl + L`
- Write `console.clear();`

</details>

<details>

<summary>JavaScript Day 02</summary>

### CODE

- [Arrays](./code/arrays.html)

### QUESTIONS

***When we do a string comparison with ==, e.g. "4" == 3, which operand gets converted?***

- _The String part is converted to a Number, e.g. "4" becomes 4 and then it's value is compared with 3_
  <br/>
  (Reference: [Comparing Strings to Numbers](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md#comparing-strings-to-numbers)) 

***How does the switch statement compares the switch value with each case value?***

Example:

```
switch (a) {
	case 2:
		// do something
		break;
	case 42:
		// do another thing
		break;
	default:
		// fallback to here
}
```

- _"...the matching that occurs between the **a** expression and each case expression is identical to the === algorithm."_
 Reference: [](https://github.com/getify/You-Dont-Know-JS/blob/f0d591b6502c080b92e18fc470432af8144db610/types%20%26%20grammar/ch5.md#switch)

- ***How do we print newlines to the console?***

Using the '\n' escape character.

`console.log("A line and \n another line and yet \n another line!");`

- ***When should we place the &lt;script&gt; tags in the &lt;head&gt; area?***

    - When you insert a library script such as the jQuery library
    - When performance/page load times are not considerably affected by the script
    - When you want to tweak CSS styling before the body is rendered via a script.

<br/>
References:
- [What is the difference between placing <script> in head and before </body>?](https://www.reddit.com/r/javascript/comments/5di1va/what_is_the_difference_between_placing_script_in/)
- [Where to place JavaScript in an HTML file?](https://stackoverflow.com/questions/196702/where-to-place-javascript-in-an-html-file)
- [Should I write script in the body or the head of the html? [duplicate]](https://stackoverflow.com/questions/3531314/should-i-write-script-in-the-body-or-the-head-of-the-html)
- [When to use the <script> tag in the head and body section of a html page? ](https://stackoverflow.com/questions/38407962/when-to-use-the-script-tag-in-the-head-and-body-section-of-a-html-page?noredirect=1&lq=1)

### REFERENCES

- [Loose Equals == vs. Strict Equals ===](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md#loose-equals-vs-strict-equals)
- [The Switch Statement](https://github.com/getify/You-Dont-Know-JS/blob/f0d591b6502c080b92e18fc470432af8144db610/types%20%26%20grammar/ch5.md#switch)

</details>

### RESOURCES

- [Visual Studio Code](https://code.visualstudio.com/)
- [Live Server extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Tutorial](http://www.javascripttutorial.net/)
- [The JavaScript Handbook, by Flavio Copes](https://flaviocopes.com/page/ebooks/)
