import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
import Clock from './Clock'

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
      <div className="component">
        <Clock totalSecondes={129} />
        <h1 className="countdown">Countdown component</h1>
      </div>
    )
  }
});

export default Countdown
