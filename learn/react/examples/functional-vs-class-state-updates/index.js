import React from "react";
import ReactDOM from "react-dom";

// (1) Setting the state to the same values, causes a re-render
class AppClass extends React.Component {

  state = { mounted: false }

  componentDidMount(){
    this.setState({ mounted: false });
  }

  render(){
    console.log("AppClass::render()")
    return (
      <div>
        <h1>CLASS COMPONENT </h1>
      </div>
    );
  }
}

// (2) Setting the state to the same values, does NOT cause a re-render
function AppFunc(){

  const [ mounted, setMounted ] = React.useState( false );

  React.useEffect(()=>{
    // setMounted( true ); // Will cause a re-render, since state is different
    setMounted( false ); // Will NOT cauase a re-render, since state is the same
  }, [])

  console.log("AppFunc()");

    return (
      <div>
        <h1>FUNCTIONAL COMPONENT { mounted } </h1>
      </div>
    );

}

const rootElement = document.getElementById("root");
ReactDOM.render( 
  <>
    <AppClass />
    <AppFunc />
  </>,
rootElement );
