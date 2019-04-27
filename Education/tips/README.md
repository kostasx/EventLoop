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

<details id="organized_structure">

<summary><strong>Organize your Project in folders<sup> 02</sup></strong></summary>
  <p>Place your CSS files in folders named <i>/css</i>, <i>/style</i> or something appropriate. Place your JavaScript files in a folder named <i>/js</i> or <i>/script</i> and your image files in folders named <i>/img</i>, <i>/images</i> or something appropriate. </p>
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
  
  <p>Carefully consider the naming convention of your files and folders and <strong>stick to it</strong>, e.g. do not mix different naming styles (uppercase/lowercase/camelCase, etc.): /img/, /js/ CSS/, /fontFiles/</p>

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
<hr>

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
<p>References: <a href="https://css-tricks.com/complete-guide-table-element/">A Complete Guide to the Table Element</a></p>

</details>

<details>

<summary><strong>Consider using &lt;label&gt; elements to accompany &lt;input&gt; and &lt;select&gt; form elements<sup> 14 FORMS</sup></strong></summary>
<p>References: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label">The label Element</a></p>

</details>

<details>

<summary><strong>Always include a name property in your &lt;input&gt; and &lt;select&gt; elements<sup> 15 FORMS</sup></strong></summary>
  <p>- Otherwise the input field values and selected options will never be send to the server.</p>
  <p>- Consider going through the documentation to ensure that you are placing the `name` attribute only on the elements that require it.</p>
  
  <p>References: <a href="https://html.com/attributes/input-name/">The <strong>name</strong> input attribute</a></p>

</details>

<details>

<summary><strong>Use proper attributes with the &lt;input&gt; elements<sup> 16 FORMS</sup></strong></summary>
  <p>Examples:</p>
  <p>The <strong>maxlength</strong> attribute is used only with the following input types: text, email, search, password, tel, or url</p>
  <p>For other control types, it is ignored.</p>
  <p><a href="https://stackoverflow.com/questions/18510845/maxlength-ignored-for-input-type-number-in-chrome">References</a></p>

</details>

<details>

<summary><strong>Choose your placeholder attribute values wisely<sup> 17 FORMS</sup></strong></summary>

 <p>Bad Example:</p>

 <pre>
 &lt;input type=&quot;text&quot; name=&quot;firstname&quot; placeholder=&quot;John&quot; ...&gt;&#10;
 &lt;input type=&quot;text&quot; name=&quot;lastname&quot; placeholder=&quot;Doe&quot; ...&gt;&#10;
 </pre>

 <hr>
 <p>Goog Example:</p>

 <pre>
    &lt;input type=&quot;text&quot; name=&quot;firstname&quot; placeholder=&quot;First Name&quot; ...&gt;&#10;
    &lt;input type=&quot;text&quot; name=&quot;lastname&quot; placeholder=&quot;Last Name&quot; ...&gt;&#10;</pre>

</details>

<details>

<summary><strong>Consider using Semantic HTML Elements<sup> 18</sup></strong></summary>

<p>Examples of non-semantic elements: &lt;div&gt; - Tells nothing about its content.</p>
<p>Examples of semantic elements: &lt;form&gt;, &lt;table&gt;, &lt;header&gt;, &lt;footer&gt;, &lt;section&gt; and &lt;article&gt; - Clearly define its content.</p>
<hr>
<p><a href="https://www.w3schools.com/html/html5_semantic_elements.asp">References</a></p>

</details>

<details>

<summary><strong>Use short and descriptive names in your submit elements<sup> 19 FORMS</sup></strong></summary>

<p>Avoid:</p>
<pre>
&lt;input type=&quot;submit&quot; value=&quot;Save Changes and Update your Database&quot;&gt;&#10;</pre>
<p>Instead use a short name and an optional description:</p>
<pre>
&lt;input type=&quot;submit&quot; value=&quot;Save&quot;&gt;&#10;&lt;p class=&quot;warning&quot;&gt;Save changes and update your database&lt;/p&gt;
</pre>
</p>

</details>



<details>

<summary><strong>Study Form Design and User Experience<sup> 20 FORMS</sup></strong></summary>

<p>A quick search for "guide to better html forms" and "html forms user experience" returned the following useful resources for designing and building better HTML Forms:</p>

- <a href="https://esri.github.io/calcite-web/guides/best-practices/forms/">Forms Best Practices:</a>

- <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Styling_HTML_forms">Styling HTML forms</a>

- <a href="https://medium.com/@Vincentxia77/best-practices-of-6-essential-principles-for-web-form-design-f48bed4708fa">Best Practices of 6 Essential Principles for Web Form Design</a>

- <a href="https://medium.freecodecamp.org/a-step-by-step-guide-to-getting-started-with-html-forms-7f77ae4522b5">A step-by-step guide to getting started with HTML forms</a>

- <a href="https://www.crazyegg.com/blog/guides/great-form-ui-and-ux/">The Crazy Egg Guide to Great Form UI and UX</a>

- <a href="https://uxplanet.org/the-18-must-do-principles-in-the-form-design-fe89d0127c92">16 Tips that Will Improve Any Online Form</a>

- <a href="https://www.ventureharbour.com/form-design-best-practices/">58 Form Design Best Practices & Form UX Examples</a>

- <a href="https://ai.googleblog.com/2014/07/simple-is-better-making-your-web-forms.html">Simple is better - Making your web forms easy to use pays off</a>

- <a href="https://uxdesign.cc/the-ux-behind-designing-better-forms-d6ebe7a817d2">The UX behind designing better forms</a>

<p>Conclusion: Keep digging and search for additional resources!</p>

</details>


<details>

<summary><strong>Use &lt;select&gt; elements for predefined values<sup> 21 FORMS</sup></strong></summary>

<p>When specific input fields have predefined values, consider using &lt;select&gt; elements.</p>

</details>


<details>

<summary><strong>Careful planning and consideration for field validations<sup> 22 FORMS</sup></strong></summary>

 <p>Bad examples:</p>
 <p>Using advanced validation patterns without providing the user with proper instructions:</p>
 <pre>&lt;input type=&quot;text&quot; name=&quot;Course Stream&quot; required placeholder=&quot;Course Stream&quot; pattern=&quot;(#)[A-Z,a-z]{2,20}&quot;&gt;&#10;</pre>
 <p>In the example above, the user is stuck with a required field which requires a very specific pattern of characters to be entered. There is no information to inform the user about the required pattern.</p>

</details>

<details>

<summary><strong>Avoid using &lt;datalist&gt; for predefined option values<sup> 23 FORMS</sup></strong></summary>

<p>	When having a predefined list of options, consider using the &lt;select&gt; element instead of the &lt;datalist&gt;. The &lt;select&gt; element &quot;locks&quot; the users to a specific list of options, whereas the &lt;datalist&gt; enables them to enter arbitrary data and thus be able to submit invalid values.</p>
<hr>
<p><strong>When to Use a Datalist</strong></p>
<p>"Since datalists have no built-in mechanism to require that a user select a provided option, they are well suited for inputs that can accept any value. While the datalist suggests predefined values, the user is free to input any value."</p>

</details>

<img src="img/undraw_accept_request_vdsd.svg" alt="" width="500px">
<hr>

## CSS

<details>

<summary><strong>VALIDATE CODE USING W3C CSS Validator<sup> 01</sup></strong></summary>

 <p><a href="https://jigsaw.w3.org/css-validator/validator">W3C CSS Validator</a></p>
 <p>Use VSCode to detect CSS Warnings and Errors</p>
 <p>Examples:</p>
<pre>
.students {
   display-flex: flex;
   flex-direction: column;
}</pre>
  <p><strong>Warning:</strong> Unknown property: display-flex</p>

</details>



<details>

<summary><strong>Proper Naming for your Selectors, Classes and IDs<sup> 02</sup></strong></summary>

  <p>For example, avoid class names like this:</p>
  <pre>.b { ... }</pre>
  <p>Instead, use something more descriptive:</p>
  <pre>.submit_button { ... }</pre>
  <p>Avoid using class names that correspond to HTML Tag names, e.g.</p>
  <pre>
    .h2 { ... }
    .p { ... }
   </pre>
   <p>Classes can and should be used on multiple elements.</p>
   <p>Classes should either describe the elements' role in the interface or what they do in terms of styling:</p>
   <pre>
   .title { ... }
   .submit_button { ... }
   .article { ... }
   </pre>
   <p>Bad choice of class names:</p>
   <pre>
   &lt;input class="button button1"&gt;
   <pre>
    <p>Better:</p>
    <pre>&lt;input class="submit_button button_border"&gt;</pre>

</details>



<details>

  <summary><strong>Avoid using illegible font families such as cursive<sup> 03</sup></strong></summary>
  <p>Avoid:<pre>font-family: cursive;</pre></p>
  <p>Prefer sans-serif fonts</p>

</details>


<details>

<summary><strong>Proper Document Formatting<sup> 04</sup></strong></summary>

  <p>- Consider using VSCode's 'Format Document' command to make your code more readable</p>
  <p>- Use a CSS Formatting Extension:</p>
  <p>Install: <a href="https://marketplace.visualstudio.com/items?itemName=lonefy.vscode-JS-CSS-HTML-formatter">JS-CSS-HTML Formatter Extension</a></p>
  <hr>
  <p>Before Formatting:</p>
  <img src="img/css-formatting-before.jpg" alt="">
  <p>After Formatting:</p>
  <img src="img/css-formatting-after.jpg" alt="">
  <hr>
  <p>Before Formatting:</p>
  <img src="img/Inline-CSS-before-formatting.jpg" alt="">
  <p>After Formatting:</p>
  <img src="img/Inline-CSS-after-formatting.jpg" alt="">

</details>



<details>

<summary><strong>Use CSS Group Selector to share CSS Rules among multiple elements<sup> 05</sup></strong></summary>

  <p>Example (Before):</p>
  <pre>
#label {
  font-size: 20px;
}
#input {
  font-size: 20px;
}
select {
  font-size: 20px;
}

legend {
  font-size: 20px;
}
  </pre>
  <p>Example (After):</p<>
  <pre>
  #label, #input, #select, #legend {
    font-size: 20px;
  }</pre>
  
  <p>Alternatively, a single class that contained the CSS rule could be applied to all of these elements</p>

</details>

<details id="css_clean_up">
<summary><strong>Remove unused/commented CSS<sup> 06</sup></strong></summary>

<p>Clean your production code from unused or commented CSS rules. Keep commented code or code that belongs to work in progress to a different git branch and keep you production branch clean.</p>

</details>

<img src="img/undraw_code_typing_7jnv.svg" alt="" width="500px">
<hr>

## JAVASCRIPT

<details id="js-event-handlers">

<summary><strong>Prefer the addEventListener() method to add Element Event Handlers<sup> 01</sup></strong></summary>

  <p>Avoid using the HTML inline &lt;element onclick=&quot;&quot;&gt; form.</p>
  <p>Avoid using the ELEMENT.onclick = function(){} format to add Event Handlers to HTML Elements in your JS code.</p>
  <p>Prefer the ELEMENT.addEventListener( EVENT, FUNCTION ) format</p>

</details>

<details>

<summary><strong>Avoid using inline JavaScript<sup> 02</sup></strong></summary>

<p>Bad example:</p>
<pre>&#9;&lt;element onclick=&quot;function(){}&quot;&gt;</pre>
<p>Place all your JavaScript code in a &lt;script&gt; Tag or an external .js file</p>

</details>


<details>

<summary><strong>Proper Naming for Functions and Variables<sup> 03</sup></strong></summary>

  <p>- Name your variables and functions according to what they do.</p> 
  <p>- Use verbs for functions and nouns for variables</p>
  <p>- Try to use descriptive names.</p> 
  <p>Bad Examples:</p>
  <pre>
myFunction(){ ... }
myFunction2(){ ... }
</pre>
<p>Good Examples:</p>
<pre>
function openMenu(){ ... }
function closeWindow(){ ... }
</pre>

</details>


<details>

<summary><strong>Avoid using the == and != Operators<sup> 04</sup></strong></summary>

  <p>- Prefer using the safer === and !== Operators</p>
  <p>Be sure to google and find what the exact differences between the two are!</p>

</details>

<details>

<summary><strong>Strive for Code Readability<sup> 05</sup></strong></summary>

  <p>- Use spaces between parentheses, operands, etc. to boost readability. For example:</p>
  <pre>
if(something===1){
  do("argument");
}else{
  apply(2);
}
</pre>
<p>Should preferably look like this:</p>
<pre>
if ( something === 1 ){

    do( "argument" );

} else {

    apply( 2 );

}</pre>

</details>


<details>

<summary><strong>Avoid using <strong>var</strong> to declare variables. Prefer the <strong>let</strong> and <strong>const</strong> ES6 keywords<sup> 06</sup></strong></summary>

<p></p>

</details>

<details>

<summary><strong>Use the Browser Developer Console to spot code Errors and Warnings<sup> 07</sup></strong></summary>

<p>Always work with the Developer Tools console open when working with Web Page that contain JS code, in order to spot JS errors and other warnings.</p>

</details>
