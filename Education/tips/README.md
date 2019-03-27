# TIPS FOR DEVELOPERS

<img src="img/undraw_done_a34v.svg" alt="" width="500px">

### A Beginner's Checklist

- <a href="#general">General<a><br>
- <a href="#html">HTML<a><br>
- <a href="#css">CSS<a><br>
- <a href="#javascript">JavaScript<a><br>

## GENERAL

<details>

<summary><strong>"Your code needs to look like you cared."<sup> 01</sup></strong></summary>
  <p>The description says it all.</p>

</details>

<details>

<summary><strong>Organize your Project in folders<sup> 02</sup></strong></summary>
  <p>Place your CSS files in folders named <i>/css</i>, <i>/style</i> or something appropriate. Place your JavaScript files in a folder named <i>/js</i> or <i>/script</i> and your image files in folders named <i>/img</i>, <i>/images</i> or something appropriate.</p>
  <p>Example:</p>
  <ul style="list-style:none; font-weight:bold;">
  <li>/</li>
  <li>/css
  </li>
  <li>/img
  </li>
  <li>/js</li>
  </ul>
  <p>Example #2:</p>
  <ul style="list-style:none; font-weight:bold;">
  <li>/</li>
  <li>/style
  </li>
  <li>/images
  </li>
  <li>/scripts 
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
  
  <p>Bad Example:</p>
  <img src="./img/improper-color-contrast.jpg" alt="" >
  

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
  
  <hr>
  
  <p>Example output of the the <a href="https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint">HTLMHint VSCode extension</a>:</p>
  <img src="img/htmlhint-errors.jpg" alt="" width="700px">




</details>

<details>

<summary><strong>Make sure you include proper descriptive Document titles<sup> 02</sup></strong></summary>
  <p>- Always use a <strong>&lt;title&gt;</strong> element inside the <strong>&lt;head&gt;</strong> tag</p>
  <p>- Avoid default Document titles placed by HTML Boilerplate files or Emmet abbreviations, like "Document"</p>

</details>

<details>

<summary><strong>Be consistent with Table Row and Column Data<sup> 03 FORMS</sup></strong></summary>
  <p>For example, input fields under each column must share common attributes:</p>
  <pre>
&lt;tr&gt;
	&lt;td&gt;&lt;input type=&quot;text&quot;&gt;&lt;/td&gt;
	&lt;td&gt;&lt;input type=&quot;number&quot;&gt;&lt;/td&gt;
&lt;tr&gt;
&lt;tr&gt;
	&lt;td&gt;&lt;input type=&quot;number&quot;&gt;&lt;/td&gt;	&lt;!-- This should have a type=&quot;text&quot; --&gt;
	&lt;td&gt;&lt;input type=&quot;number&quot;&gt;&lt;/td&gt;
&lt;tr&gt;
  </pre>

</details>

<details>

<summary><strong>Carefully Group your Form Input Elements<sup> 04 FORMS</sup></strong></summary>
<p>Recommendend Reading: <a href="https://mattstauffer.com/blog/a-little-trick-for-grouping-fields-in-an-html-form/">A little trick for grouping fields in an HTML form</a></p>

</details>

<details>

<summary><strong>Make sure you have a good understanding of HTML Forms and the rules governing each Form Element<sup> 05 FORMS</sup></strong></summary>
  <p>Validate your code to ensure you have no errors in your HTML forms:</p>
  <p>Avoid errors like placing the <strong>&lt;legend&gt;</strong> element outside of a <strong>&lt;fieldset&gt;</strong> element, and so forth.</p>
  <p><strong>Recommended Reading</strong> (Basics):</p>
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form">- Form Element </a><br>
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">- Input Element </a><br>
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label">- Label Element</a><br>
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select">- Select Element</a><br>

</details>

<details>

<summary><strong>Use Code Formatting<sup> 06</sup></strong></summary>
  <ul>
  <li>Use indentation</li>
  <li>Reduce/remove unnecessary whitespace (newlines, tabs, etc.)</li>
  <li>Strive for consistency</li>
	<li>Use automated tools like the <strong>VSCode's</strong> <i>Format Document</i> command to format your code</li>
  </ul>
</details>

<details>

<summary><strong>Enclose input fields inside &lt;form&gt; tags<sup> 07 FORMS</sup></strong></summary>
  <p>For example, the <strong>&lt;input&gt;</strong> and <strong>&lt;select&gt;</strong> elements must be enclosed inside <strong>&lt;form&gt;</strong> tags.
  </p>

</details>

<details>

<summary><strong>Avoid using HTML Tags for Formatting or Styling Elements<sup> 08</sup></strong></summary>
  <p>Prefer CSS rules to stylize or format HTML elements</p>
  <p> Example: Avoid using &lt;br&gt; for spacing. Try using CSS properties like padding, margin, display, etc.</p>

</details>

<details>

<summary><strong>Remove unnecessary type="text/javascript" attribute from &lt;script&gt; tags<sup> 09</sup></strong></summary>
  <p><a href="https://stackoverflow.com/questions/14323376/do-html5-script-tag-need-type-javascript">Reference</a>
</p>

</details>

<details>

<summary><strong>Consider using the &lt;fieldset&gt; tag to organize your form elements into sections<sup> 10 FORMS</sup></strong></summary>
  <p><strong>Note:</strong> The &lt;fieldset&gt; elements should preferably be used to group two or more input elements.</p>

</details>

<details>

<summary><strong>Avoid using inline Styling<sup> 11</sup></strong></summary>
  <p>Bad Practice:</p>
  <code>&lt;element style="rule:value" ... &gt;&lt;/element&gt;</code>
  <hr>
  <p>Good Practice:</p>
  <p>Place your CSS inside <strong>&lt;style&gt;</strong> tags or external CSS files <strong>&lt;link rel="stylesheet"&gt;</strong></p>

</details>

<details>

<summary><strong>Avoid using obsolete HTML5 elements and attributes<sup> 12</sup></strong></summary>
  <p>Example: Do not use the <strong>cellspacing</strong> and <strong>cellpadding</strong> <strong>&lt;table&gt;</strong> attributes</p>
  <p><a href="https://stackoverflow.com/questions/6048913/in-html5-with-respect-to-tables-what-replaces-cellpadding-cellspacing-valign">Reference</a>
</p>

</details>

<details>

<summary><strong>Organize your &lt;table&gt; Elements using &lt;thead&gt;, &lt;tbody&gt; and &lt;tfoot&gt; sections<sup> 13 TABLES</sup></strong></summary>
  <p></p>

</details>

<details>

<summary><strong>Consider using &lt;label&gt; elements to accompany &lt;input&gt; and &lt;select&gt; form elements<sup> 14 FORMS</sup></strong></summary>
  <p></p>

</details>

## CSS

## JAVASCRIPT

