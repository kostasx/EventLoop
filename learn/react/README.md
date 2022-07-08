# LEARN REACT.JS

![React](./img/MetaphorsofReact_2.0.012.jpg)

_Illustration by [Maggie Appleton](https://maggieappleton.com/)_

<h2>DIVE INTO REACT <em>(THE ESSENTIALS)</em></h2>

- [**What is JSX?** by Kent C. Dodds](https://kentcdodds.com/blog/what-is-jsx)
- [**Deconstructing React (⭐⭐⭐⭐⭐ Pure gold!)**, Tejas Kumar | 40min](https://www.youtube.com/watch?v=f2mMOiCSj5c)

<h2>HOW TO SECTION <em>(TL;DR)</em></h2>

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

  <!-- SUPRESS BROWSER ERRORS -->

  <details>
    <summary><strong>HOW TO | SUPPRESS BROWSER ERRORS IN DEVELOPMENT MODE</strong></summary>
    <br/>

  > **INSTRUCTIONS**:
  
  Add the following code snippet in the <head> section of the /public/index.html file:

  ```html
  <script>
    window.addEventListener('error', function(e){
	e.stopImmediatePropagation();	// prevent React's listener from firing
	e.preventDefault();				// prevent the browser's console error message 
    });
  </script>
  </head>
  ```
  > **DEMO**: [CODESANDBOX](https://codesandbox.io/s/reactjs-disable-browser-errors-nql4d)

  > **REFERENCES & SOURCES**:

  - [Source](https://stackoverflow.com/questions/46589819/disable-error-overlay-in-development-mode)

  </details>


  <!-- INTEGRATE BOOTSTRAP -->

  <details>
    <summary><strong>HOW TO | INTEGRATE BOOTSTRAP</strong></summary>
    <br/>

  > **INSTRUCTIONS**:

  Way #1) Using the CSS library

  `index.js:`

  ```jsx
  import 'bootstrap/dist/css/bootstrap.css'
  ```

  [Reference](https://create-react-app.dev/docs/adding-bootstrap/)

  ---
  Way 2.1) Using Components: [react-strap](https://reactstrap.github.io/)

  ```bash
  npm install --save reactstrap
  ```

  ```jsx
  import { Button } from 'reactstrap';

  <Button color="danger">Danger!</Button>
  ```

  ---
  Way 2.2) Using Components: [react-boostrap](https://react-bootstrap.github.io/)

  ```bash
  npm install react-bootstrap bootstrap
  ```

  ```jsx
  import { Button } from 'react-bootstrap';

  <Button variant="danger">Danger</Button>
  ```

  </details>

  <!-- LAUNCH CREATE-REACT-APP DEVELOPMENT SERVER IN HTTPS -->

  <details>
    <summary><strong>HOW TO | LAUNCH CREATE-REACT-APP DEVELOPMENT SERVER IN HTTPS</strong></summary>
    <br/>

  > **INSTRUCTIONS**:

  Create or Edit the file **.env** and add the following line:

  ```
  HTTPS=true
  ```

  </details>
  
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

<h2>EXAMPLES SECTION</h2>

#### React: useId() Hooks (v18, 2022)

- [React | useId() | **Codesandbox**](https://codesandbox.io/s/github/kostasx/EventLoop/tree/master/learn/react/examples/useid-hook)
- [React | useId() | **GitHub Dev**](https://github.dev/kostasx/EventLoop/tree/master/learn/react/examples/useid-hook)
- [React | useId() | **GitHub Repo**](https://github.com/kostasx/EventLoop/tree/master/learn/react/examples/useid-hook)

#### React: Internationalization/Localization with i18next (v18, 2022)

- [React | i18next | **Codesandbox**](https://codesandbox.io/s/github/kostasx/EventLoop/tree/master/learn/react/examples/i18next-basic-setup)
- [React | i18next | **GitHub Dev**](https://github.dev/kostasx/EventLoop/tree/master/learn/react/examples/i18next-basic-setup)
- [React | i18next | **GitHub Repo**](https://github.com/kostasx/EventLoop/tree/master/learn/react/examples/i18next-basic-setup)

#### React: Pagination (v18, 2022)

- [React | Pagination | **Codesandbox**](https://codesandbox.io/s/github/kostasx/EventLoop/tree/master/learn/react/examples/pagination)
- [React | Pagination | **GitHub Dev**](https://github.dev/kostasx/EventLoop/tree/master/learn/react/examples/pagination)
- [React | Pagination | **GitHub Repo**](https://github.com/kostasx/EventLoop/tree/master/learn/react/examples/pagination)

#### React/Redux: useSelector and useDispatch

- [React | Redux | useSelector & useDispatch | **Codesandbox**](https://codesandbox.io/s/github/kostasx/EventLoop/tree/master/learn/react/examples/useselector-usedispatch)
- [React | Redux | useSelector & useDispatch | **GitHub Dev**](https://github.dev/kostasx/EventLoop/tree/master/learn/react/examples/useselector-usedispatch)
- [React | Redux | useSelector & useDispatch | **GitHub Repo**](https://github.com/kostasx/EventLoop/tree/master/learn/react/examples/useselector-usedispatch)

#### React: Context API + useContext (v18, 2022)

- [React | Context API + useContext | **Codesandbox**](https://codesandbox.io/s/github/kostasx/EventLoop/tree/master/learn/react/examples/context-api-useContext)
- [React | Context API + useContext | **GitHub Dev**](https://github.dev/kostasx/EventLoop/tree/master/learn/react/examples/context-api-useContext)
- [React | Context API + useContext | **GitHub Repo**](https://github.com/kostasx/EventLoop/tree/master/learn/react/examples/context-api-useContext)

#### React: Context API

- [React | Context API | **Codesandbox**](https://codesandbox.io/s/github/kostasx/EventLoop/tree/master/learn/react/examples/context-api)
- [React | Context API | **GitHub Dev**](https://github.dev/kostasx/EventLoop/tree/master/learn/react/examples/context-api)
- [React | Context API | **GitHub Repo**](https://github.com/kostasx/EventLoop/tree/master/learn/react/examples/context-api)

#### React: Fetch from API and update View

- [React | Fetch and Update View | **Codesandbox**](https://codesandbox.io/s/github/kostasx/EventLoop/tree/master/learn/react/examples/fetch-and-update-view)
- [React | Fetch and Update View | **GitHub Dev**](https://github.dev/kostasx/EventLoop/tree/master/learn/react/examples/fetch-and-update-view)
- [React | Fetch and Update View | **GitHub Repo**](https://github.com/kostasx/EventLoop/tree/master/learn/react/examples/fetch-and-update-view)

#### Component Lifecycle 
  - [CodeSandbox](https://codesandbox.io/s/v828m8j8x0)
  - [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/kostasx/EventLoop/tree/master/learn/react/examples/lifecycle)

#### Avoid re-rendering of Child Components when Parent state/props change using **shouldComponentUpdate()** 
  - [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/kostasx/EventLoop/tree/master/learn/react/examples/shouldcomponentupdate)

#### Class [1] vs Functional [2] React Components: Same state [1] causes / [2] does not cause re-render 
  - [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/kostasx/EventLoop/tree/master/learn/react/examples/functional-vs-class-state-updates)

#### React Router Setups: Re-using Layout Components (React v18, React Router v6, 2022)

- [React | Redux | Outlet | **Codesandbox**](https://codesandbox.io/s/github/kostasx/EventLoop/tree/master/learn/react/examples/react-router-reusable-layout-components)
- [React | Redux | Outlet | **GitHub Dev**](https://github.dev/kostasx/EventLoop/tree/master/learn/react/examples/react-router-reusable-layout-components)
- [React | Redux | Outlet | **GitHub Repo**](https://github.com/kostasx/EventLoop/tree/master/learn/react/examples/react-router-reusable-layout-components)

#### React Redux Basic CRUD Store

- [React | Redux | Basic CRUD Store | **Codesandbox**](https://codesandbox.io/s/github/kostasx/EventLoop/tree/master/learn/react/examples/reactjs-redux-crud-store)
- [React | Redux | Basic CRUD Store | **GitHub Dev**](https://github.dev/kostasx/EventLoop/tree/master/learn/react/examples/reactjs-redux-crud-store)
- [React | Redux | Basic CRUD Store | **GitHub Repo**](https://github.com/kostasx/EventLoop/tree/master/learn/react/examples/reactjs-redux-crud-store)

#### React + Redux: Get Initial State from  API

- [React | Redux | Basic CRUD Store | **Codesandbox**](https://codesandbox.io/s/github/kostasx/EventLoop/tree/master/learn/react/examples/redux-initial-state-from-api)
- [React | Redux | Basic CRUD Store | **GitHub Dev**](https://github.dev/kostasx/EventLoop/tree/master/learn/react/examples/redux-initial-state-from-api)
- [React | Redux | Basic CRUD Store | **GitHub Repo**](https://github.com/kostasx/EventLoop/tree/master/learn/react/examples/redux-initial-state-from-api)

---

<h2>REACT APPLICATIONS</h2>

#### MarkUpsAndDowns: Convert HTML to Markdown and vice-versa

- [Application](https://markupdown.netlify.app/)
- [Source Code](https://github.dev/kostasx/MarkUpsAndDowns)

---

### Suggestions / Requests / Comments / Feedback

Do you want to see something specific in the list? Let me know, by opening an Issue.
