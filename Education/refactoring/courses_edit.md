## CODE REFACTORING - Case Study AfDemp - BC_EP001

Initial code: (student) code that listens for the `change` event on a `&lt;select&gt;` element and updates a form's content accordinly:

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
