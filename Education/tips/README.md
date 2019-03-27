# TIPS FOR DEVELOPERS

### A Beginner's Checklist

<img src="img/undraw_done_a34v.svg" alt="" width="500px">

## GENERAL

<details>

<summary><strong>"Your code needs to look like you cared."<sup> 01</sup></strong></summary>
  <p>The description says it all.</p>

</details>

<details>

<summary><strong>Organize your Project in folders<sup> 02</sup></strong></summary>
  <p>Example:</p>
  <ul style="list-style:none; font-weight:bold;">
  <li>/</li>
  <li>/css<span style="font-weight:normal;padding-left:40px;">Place your CSS files here</span>
  </li>
  <li>/img<span style="font-weight:normal;padding-left:40px;">Place your Image files here</span>
  </li>
  <li>/js <span style="font-weight:normal;padding-left:40px;">Place your JavaScript files here</span>
  </li>
  </ul>
  <p>Example #2:</p>
  <ul style="list-style:none; font-weight:bold;">
  <li>/</li>
  <li>/style<span style="font-weight:normal;padding-left:40px;">Place your CSS files here</span>
  </li>
  <li>/images<span style="font-weight:normal;padding-left:40px;">Place your Image files here</span>
  </li>
  <li>/scripts <span style="font-weight:normal;padding-left:40px;">Place your JavaScript files here</span>
  </li>
  </ul>

</details>

<details>

<summary><strong>Use english language for naming variables, functions, class names and element IDs<sup> 03</sup></strong></summary>
  <p>Avoid Greek or Greeklish.</p>

</details>

<details>

<summary><strong>Choose Proper Color Sets for your Text and Buttons<sup> 04</sup></strong></summary>
  <p>Contrast and color use are vital to accessibility. Users, including users with visual disabilities, must be able to perceive content on the page.</p>
  <p><strong>Always check your color sets with one of the available Contrast Checking services:</strong></p>
  <ul>
  <li><a href="https://webaim.org/resources/contrastchecker/"><strong>Color Contrast Checker</strong> by WebAIM.org</a></li>
  <li><a href="https://contrastchecker.com/"><strong>Contrast Checker</strong> by Acart Communications</a></li>
  <li><a href="http://accessible-colors.com/"><strong>Accessible Colors</strong></a></li>
  </ul>
  <p>Bad Example:</p>
  <img src="./img/contrast-check-fail.jpg" alt="" >

</details>

<details>

<summary><strong>Always test your web pages in more than one Browser<sup> 05</sup></strong></summary>

<p>Test with at least two or three different browsers and on several screen sizes.</p>
<p>Consider testing the web pages using the Browsers' mobile device emulators</p>

</details>

<details>

<summary><strong>Do not use local file paths as links<sup> 06</sup></strong></summary>
  <p style="color:tomato">Example (wrong):</p>
  <code>
  &lt;link href="C:\Users\John\Desktop\css\style.css" ...&gt;
  </code>
  <br/>
  <br/>
  <p style="color:limegreen">Example (correct):</p>
  <code>
  &lt;link href="./css/style.css" ...&gt;
  </code>

</details>

<details>

<summary><strong>Keep studying the standards, revisit old code and refactor<sup> 07</sup></strong></summary>
  <p>Make sure that you keep studying the HTML, CSS and JavaScript standards and revisit your old code and try to refactor it using the recently acquired knowledge.</p>
  <p>Study well-designed forms and interfaces that you commonly use (e.g. Gmail, Search Engines, Contact Forms, etc.) and try to apply the rules and styling guides to your own layouts and web pages.</p>

</details>

<img src="img/drawkit-content.svg" alt="" width="500px">

## HTML

<details>

<summary><strong>Always Validate your HTML code<sup> 01</sup></strong></summary>

  <p>- Validate your HTML code using the <a href="https://validator.w3.org/">W3C Validator</a></p>
  <p>- Use your Code Editor's or IDE built-in validation system or install the appropriate plugins or extensions.</p>
  <p>- For <a href="https://code.visualstudio.com/">Visual Studio Code</a> you can use the <a href="https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint">HTMLHint Extension</a>.</p>
  <p><strong>Examples of validation errors:</strong><p>

  <hr>

  <fieldset>
  <legend>Invalid Tags</legend>
  <p>Bad code: <code> &lt;/br&gt; </code></p>
  <p><strong>Invalid <code>&lt;/br&gt;</code> tag.</strong> It should be <code>&lt;br&gt;</code></p>
  </fieldset>

  <hr>

  <fieldset>
  <legend>Invalid ID names</legend>
  <p>Bad code: <code> &lt;input id="Date of birth2"&gt; </code></p>
  <p><strong>An ID must not contain whitespace.</strong></p>
  </fieldset>

  <hr>

  <fieldset>
  <legend>Invalid Element Nesting</legend>
  <p>Bad code: <code> &lt;a href="#"&gt; &lt;button&gt;Click Me&lt;/button&gt; &lt;/a&gt; </code></p>
  <p><strong>The element button must not appear as a descendant of the a element.</strong><a href="https://stackoverflow.com/questions/6393827/can-i-nest-a-button-element-inside-an-a-using-html5">Reference</a></p>
  </fieldset>

</details>



<details open>

<summary><strong><sup> 01</sup></strong></summary>
  <p></p>

</details>

## CSS

<details open>

<summary><strong><sup> 01</sup></strong></summary>
  <p></p>

</details>

## JAVASCRIPT

<details open>

<summary><strong><sup> 01</sup></strong></summary>
  <p></p>

</details>
