import React from "react";
import ReactDOM from "react-dom";

// Instructions: 
// (1) See the number of Component renders in the console
// (2) Uncomment shouldComponentUpdate() and check again
class Child extends React.Component {

  // shouldComponentUpdate( nextProps, nextState ){
  //   console.log( "Child::shouldComponentUpdate()" );
  //   return false;
  // }

  render(){
    console.log("Child::render()")
    return (
      <div>
        <h1>Child COMPONENT </h1>
      </div>
    );
  }
}

class App extends React.Component {

  state = { mounted: false }

  componentDidMount(){
    this.setState({ mounted: true });
  }

  render(){
    console.log("App::render()")
    return (
      <div>
        <h1>PARENT COMPONENT </h1>
        <Child />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render( <App />, rootElement );
