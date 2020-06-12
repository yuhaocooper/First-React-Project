import React from 'react';

//Functional Component
/*
function First() {
  return(
    <div>
      <p> Hello World</p>
    </div>
  );
}

export default First
*/

//Class Component
class First extends React.Component {
  render() {
    return(
      <div>
        <p> Hello World</p>
      </div>
    )
  }
}

export default First
