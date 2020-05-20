# LEARN REACT.JS

![React](./img/MetaphorsofReact_2.0.012.jpg)

_Illustration by [Maggie Appleton](https://maggieappleton.com/)_

<h2>HOW TO SECTION</h2>

  <!--
  <details>
    <summary><strong>HOW TO | DESCRIPTION</strong></summary>
    <br/>

  > **INSTRUCTIONS**:

  > **DEMO**: [CODESANDBOX]()

  > **REFERENCES & SOURCES**:

  - []()

  </details>
  -->
  
  <details>
    <summary><strong>HOW TO | ROUTING | Navigate Programmatically</strong></summary>
    <br/>

  > **INSTRUCTIONS**:

  Class Components:

  ```jsx
  class HomePage extends Component {

    redirectClickHandler(){

      this.props.history.push("/products");

    }

  }
  ```

  Functional Components:

  ```jsx
  function HomePage( props ){

    redirectClickHandler(){

      props.history.push("/products");

    }

  }
  ```

  > **DEMO**: [CODESANDBOX](https://codesandbox.io/s/reactjs-routing-navigate-programmatically-7lilk)

  </details>


  <details>
    <summary><strong>HOW TO | INTEGRATE SEMANTIC UI</strong></summary>
    <br/>

  > **INSTRUCTIONS**:

  1) Using [sematic-ui-css](https://github.com/Semantic-Org/Semantic-UI-CSS):

  ```bash
  npm install sematic-ui-css  
  ```

  OR:

  ```bash
  yarn add sematic-ui-css
  ```

  ```jsx
  import 'semantic-ui-css/semantic.min.css';

  <button class="ui primary basic button">Primary</button>
  <button class="ui secondary basic button">Secondary</button>
  <button class="ui positive basic button">Positive</button>
  <button class="ui negative basic button">Negative</button>
  ```

  2) Using: [semantic-ui-react](https://react.semantic-ui.com/): 

  ```bash
  npm install semantic-ui-react
  ```

  OR:

  ```bash
  yarn add semantic-ui-react
  ```

  ```jsx
  import { Button } from 'semantic-ui-react';

  <Button primary>Primary</Button>
  <Button secondary>Secondary</Button>
  <Button positive>Positive</Button>
  <Button negative>Negative</Button>
  ```

  > **DEMO**: [CODESANDBOX](https://codesandbox.io/s/reactjs-import-semantic-ui-m80x9)

  </details>

  <details>
    <summary><strong>HOW TO | AUTOMATICALLY CONVERT HTML TO JSX</strong></summary>
    <br/>

  > **(1) Using a (free) online tool**: [HTML-to-JSX](https://transform.tools/html-to-jsx)

  > **(2) Using a VSCode Extension**: [HTML-to-JSX](https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx)

  </details>

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

---

### Suggestions / Requests / Comments / Feedback

Do you want to see something specific in the list? Let me know, by opening an Issue.
