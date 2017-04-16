import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;


const Clock = React.createClass({
getDefaultProps(){
  return{
  totalSecondes: 0
  }
},
propTypes : {
    totalSecondes: React.PropTypes.number
},

  // sub(e){
  //   e.preventDefault();
  //   let sec = this.refs.clock.value;
  //   let temps = this.formatSecondes(sec);
  //   let but = this.refs.but;
  //   $(but).text(temps)
  // },
  formatSecondes(totalSecondes){
    let secondes = totalSecondes % 60; ///modulus, combien de secondes reste une fois 60 enleve a chaque fois que possible
    let minutes = Math.floor(totalSecondes / 60)

    if(secondes < 10){
      secondes = '0' + secondes
    }
    if(minutes < 10){
      minutes = '0' + minutes
    }

    return `${minutes}:${secondes}`;
  },
  render() {
     let { totalSecondes } = this.props
    return (
      <div className="clock">
        <span className="clock-text">{this.formatSecondes(totalSecondes)}</span>

        {/* <form className="clocktime" onSubmit={this.sub}>
          <br />
          <input type="text" ref='clock' className="search" placeholder="entrer le nombre de secondes"/>
          <br />
          <button type="submit" ref="but" className="submit">calculer</button>
        </form> */}
      </div>
    )
  }
});

export default Clock
