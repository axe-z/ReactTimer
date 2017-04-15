import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;


const Timer = React.createClass({
  componentDidMount(){  ///est
    let node =  findDOMNode(this);  ///retourne tout le div.
    TweenMax.from(node,1,{
      opacity: 0,  x:  100,
      ease: Power4.easeInOut
    })
      },
  render() {
    return (
      <div>
        <h1>Timer component</h1>
      </div>
    )
  }
});

export default Timer
