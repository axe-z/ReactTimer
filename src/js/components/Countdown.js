import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
import Clock from './Clock'
import CountdownForm from './CountdownForm';

const Countdown = React.createClass({
  getInitialState(){
    return  {
      count: 0   ///on fait un state, pour mofier une etat, 'est comme ca qu on doit rafraichhir le data
    }
  },
  componentDidMount(){  ///est
    let node =  findDOMNode(this);  ///retourne tout le div.
    let clock = node.children[0];

    TweenMax.set(node, { filter: 'blur(0px)'})

    var tl = new TimelineMax({paused: true});
    tl.from(node,2,{
      opacity: 0,  x:  50,  delay: 0.2,  filter: 'blur(5px)', rotationY: 0, y: 300, scale: 2,
      ease: Expo.easeOut
    })
    tl.from(clock, 0.3, {
      rotationY: '180deg',
      delay: -1.5,

    })
   .play()
      },
      componentWillUpdate(){   ///va animer au moment que le state change
        let node =  findDOMNode(this);  ///retourne tout le div.
        TweenMax.from(node,2,{
          scale: 1.045,
          //y: -25,
          ease: Back.easeOut.config(5)
        })
      },
  handleCountdown(strSecondes){  //recoit ce qui est envoye,strsecond vient de la form,
     this.setState({
       count: strSecondes    //c'est comme ca qu on doit rafraichhir le data
     })
  },
  render() {
    let {count} = this.state
    return (
      <div className="component">
        <Clock totalSecondes={this.state.count} />
        <CountdownForm onSetCountdown={this.handleCountdown} />
        {/*   on recoit la props de submit, fait props, qui avec la fn s occupe du data */}
          <h1 className="countdown">Countdown component</h1>
      </div>
    )
  }
});

export default Countdown
