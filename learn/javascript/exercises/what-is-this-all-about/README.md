# What is this all about?

> Requirements: jQuery
> Level: EASY

Fix the code, so that the input is displayed in the div.

**IMPORTANT:** Explain why the code is not currently working. 

```html
<body>
    <input type="text" id="live" placeholder="Type something...">
    <div id="output"></div>

    <script>
    $("#live").on("input", (e)=>{
            
        $("#output").text( this.value );

    });
    </script>
</body>
```

## STUDY

- Arrow Functions
- All about `this` in JavaScript
- Event Handlers in JavaScript and jQuery