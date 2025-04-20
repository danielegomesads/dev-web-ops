//Buuton.js
import React from 'react';

// Button component receives props for event handling and styling
function Button(props) {
  // The button uses the onClick and style props, and displays any children passed to it
  return (
    <button onClick={props.onClick} style={props.style}>
      {props.children}
    </button>
  );
}

export default Button;
