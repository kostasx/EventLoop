## CODE REFACTORING - Case Study AfDemp - BC_EP001

Initial code: (student) code that listens for the `change` event on a &lt;select&gt; element and updates a form's content accordinly:

```javascript
document.forms.myForm.cselect.addEventListener("change", function (e) {

    let selectedIndex = document.forms.myForm.cselect.selectedIndex;
    let courses = [
        "Coding Bootcamp1,Java,FullTime,2020-02-01,2020-04-30",
        "Coding Bootcamp1,Java,PartTime,2020-02-01,2020-07-30",
        "Coding Bootcamp2,C#,FullTime,2020-05-01,2020-07-30",
        "Coding Bootcamp2,C#,PartTime,2020-05-01,2020-10-30"
    ]
    document.forms.myForm.title.value = courses[selectedIndex-1].split(",")[0];
    document.forms.myForm.stream.value = courses[selectedIndex-1].split(",")[1];
    document.forms.myForm.type.value = courses[selectedIndex-1].split(",")[2];
    document.forms.myForm.startdate.value = courses[selectedIndex-1].split(",")[3];
    document.forms.myForm.enddate.value = courses[selectedIndex-1].split(",")[4];

});
```
---
**Refactoring - Step 01: Consider declaring a function and passing the function name to the callback argument instead of placing an anonymous function:**

Instead of:

`ELEMENT.addEventListener( EVENT, function(){ ... } );`

Do this:

`function handleEVENT(){ ... }`
`ELEMENT.addEventListener( EVENT, handleEVENT );`

Pros:
- Cleaner and more readable code
- Reusability: the function you have just declared can be used in other event listeners as well

Refactored code:

```javascript
function handleFormSelection ( e ){

    let selectedIndex = document.forms.myForm.cselect.selectedIndex;
    let courses = [
        "Coding Bootcamp1,Java,FullTime,2020-02-01,2020-04-30",
        "Coding Bootcamp1,Java,PartTime,2020-02-01,2020-07-30",
        "Coding Bootcamp2,C#,FullTime,2020-05-01,2020-07-30",
        "Coding Bootcamp2,C#,PartTime,2020-05-01,2020-10-30"
    ]
    document.forms.myForm.title.value = courses[selectedIndex-1].split(",")[0];
    document.forms.myForm.stream.value = courses[selectedIndex-1].split(",")[1];
    document.forms.myForm.type.value = courses[selectedIndex-1].split(",")[2];
    document.forms.myForm.startdate.value = courses[selectedIndex-1].split(",")[3];
    document.forms.myForm.enddate.value = courses[selectedIndex-1].split(",")[4];

}

document.forms.myForm.cselect.addEventListener("change", handleFormSelection );
```
---
**Refactoring - Step 02: Inside Event handling functions, you can use the `this` keyword or the `event.target` property to access the element that triggered the event.**

```javascript
function handleFormSelection ( e ){

    console.log( document.forms.myForm.cselect === this );      // true
    console.log( document.forms.myForm.cselect === e.target );  // true
    let selectedIndex = this.selectedIndex;
    let courses = [
        "Coding Bootcamp1,Java,FullTime,2020-02-01,2020-04-30",
        "Coding Bootcamp1,Java,PartTime,2020-02-01,2020-07-30",
        "Coding Bootcamp2,C#,FullTime,2020-05-01,2020-07-30",
        "Coding Bootcamp2,C#,PartTime,2020-05-01,2020-10-30"
    ]
    document.forms.myForm.title.value = courses[selectedIndex-1].split(",")[0];
    document.forms.myForm.stream.value = courses[selectedIndex-1].split(",")[1];
    document.forms.myForm.type.value = courses[selectedIndex-1].split(",")[2];
    document.forms.myForm.startdate.value = courses[selectedIndex-1].split(",")[3];
    document.forms.myForm.enddate.value = courses[selectedIndex-1].split(",")[4];

}

document.forms.myForm.cselect.addEventListener("change", handleFormSelection );
```
---
**Refactoring - Step 03: You can use the HTMLSelectElement.form property to access the parent form:**

Pros: In this way you reduce and optimize your code, since you limit the amount of Object property access operations to a minimum.
[References](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/form)

```javascript
function handleFormSelection ( e ){

    let parentForm = this.form;
    let selectedIndex = this.selectedIndex;
    let courses = [
        "Coding Bootcamp1,Java,FullTime,2020-02-01,2020-04-30",
        "Coding Bootcamp1,Java,PartTime,2020-02-01,2020-07-30",
        "Coding Bootcamp2,C#,FullTime,2020-05-01,2020-07-30",
        "Coding Bootcamp2,C#,PartTime,2020-05-01,2020-10-30"
    ]
    parentForm.title.value = courses[selectedIndex-1].split(",")[0];
    parentForm.stream.value = courses[selectedIndex-1].split(",")[1];
    parentForm.type.value = courses[selectedIndex-1].split(",")[2];
    parentForm.startdate.value = courses[selectedIndex-1].split(",")[3];
    parentForm.enddate.value = courses[selectedIndex-1].split(",")[4];

}

document.forms.myForm.cselect.addEventListener("change", handleFormSelection );
```
---
**Refactoring - Step 04: Consider caching Element Selectors, Accessed Object Properties and other values derived through various operations by storing them in a variable:**

In this next example, we are reducing the number of redundant `.split()` operations to 1 from the initial 5.

```javascript
function handleFormSelection ( e ){

    let parentForm = this.form;
    let selectedIndex = this.selectedIndex;
    let courses = [
        "Coding Bootcamp1,Java,FullTime,2020-02-01,2020-04-30",
        "Coding Bootcamp1,Java,PartTime,2020-02-01,2020-07-30",
        "Coding Bootcamp2,C#,FullTime,2020-05-01,2020-07-30",
        "Coding Bootcamp2,C#,PartTime,2020-05-01,2020-10-30"
    ]
    let selectedCourseValues = courses[selectedIndex-1].split(",");
    parentForm.title.value = selectedCourseValues[0];
    parentForm.stream.value = selectedCourseValues[1];
    parentForm.type.value = selectedCourseValues[2];
    parentForm.startdate.value = selectedCourseValues[3];
    parentForm.enddate.value = selectedCourseValues[4];

}

document.forms.myForm.cselect.addEventListener("change", handleFormSelection );
```
