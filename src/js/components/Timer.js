import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
import Clock from './Clock'

const Timer = React.createClass({
  componentDidMount(){  ///est
    let node =  findDOMNode(this);  ///retourne tout le div.
    TweenMax.set(node, { filter: 'blur(0px)'})

    var tl = new TimelineMax({paused: true});
    tl.from(node,3,{
      opacity: 0,  x:  50,  delay: 0.3,  filter: 'blur(5px)',  y: 300, scale: 2, ease: Expo.easeOut
    })
   .play()

      },
  render() {
    return (
      <div className="component">
        <h1>Timer component</h1>
        <Clock />
      </div>
    )
  }
});

export default Timer
