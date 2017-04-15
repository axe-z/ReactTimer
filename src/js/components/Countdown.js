import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;


const Countdown = React.createClass({
  componentDidMount(){  ///est
    let node =  findDOMNode(this);  ///retourne tout le div.
    TweenMax.from(node,1,{
      opacity: 0,  x:  100,
      ease: Power4.easeInOut
    })
      },
  render() {
    return (
      <div className="countdown">
        <h1>Countdown component</h1>
      </div>
    )
  }
});

export default Countdown
