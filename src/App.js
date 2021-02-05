import React from "react";
import "./styles.css";
const { useRef } = React;

const App = () => {
  const buttonRef = useRef();
  return (
    <div className="box">
      <h1>The Button has a ref</h1>
      <button
        onClick={() => {
          console.log(buttonRef.current);
        }}
        ref={buttonRef}
        className="button"
      >
        Special Button
      </button>
    </div>
  );
};

export default App;
