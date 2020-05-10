# LEARN REACT.JS

![React](./img/MetaphorsofReact_2.0.012.jpg)

_Illustration by [Maggie Appleton](https://maggieappleton.com/)_

<h2>HOW TO SECTION</h2>

  <details>
    <summary><strong>HOW TO | IMPORT CDN RESOURCES</strong></summary>
    <br/>

  > **Way #1 - Import the resources in the `index.html` file**:

  ```html
  <head>
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  </head>
  ```
  > **Way #2 - Use the @import CSS rule inside a local .css or .scss file**:

  `App.css:`

  ```css
	@import 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css';
  ```

  ```jsx
  import './App.css';
  ```

  > **DEMO**: [CODESANDBOX](https://codesandbox.io/s/reactjs-import-cdn-resources-c9lt8)

  > **REFERENCES & SOURCES**:

  - [StackOverflow: How to import libraries from cdn in reactjs?](https://stackoverflow.com/questions/42915486/how-to-import-libraries-from-cdn-in-reactjs)

  </details>

  <details>
    <summary><strong>HOW TO | IMPORT FONTAWESOME</strong></summary>
    <br/>

  > **INSTALLATION**:

  ```bash
  npm i --save @fortawesome/fontawesome-svg-core
  npm i --save @fortawesome/free-solid-svg-icons
  npm i --save @fortawesome/react-fontawesome
  ```

  > **USAGE**:

  ```jsx
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'

  <FontAwesomeIcon icon={faCoffee}/>
  ```

  > **DEMO**: [CODESANDBOX](https://codesandbox.io/s/reactjs-fontawesome-2tw42)

  > **REFERENCES & SOURCES**:

  - [https://scotch.io/tutorials/using-font-awesome-5-with-react](https://scotch.io/tutorials/using-font-awesome-5-with-react)
  - [https://programmingwithmosh.com/react/font-awesome-5-with-react/](https://programmingwithmosh.com/react/font-awesome-5-with-react/)
  - [https://stackoverflow.com/questions/23116591/how-to-include-a-font-awesome-icon-in-reacts-render](https://stackoverflow.com/questions/23116591/how-to-include-a-font-awesome-icon-in-reacts-render)

  </details>