import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
import { Link, IndexLink } from 'react-router'


let style = {
  fontWeight: 400,
  fontFamily: 'NexaRegular'
}
const Navigation = () => {
    return (
      <div>
        <ul className='navbar'>
          <li className ="lien">React Time App</li>
          <IndexLink to="/" className ="lien" activeClassName ="active" activeStyle={style}>TIMER</IndexLink>
          <Link to="/" className ="lien" activeClassName ="active" activeStyle={style}>COUNTDOWN</Link>
          <li className="droite">Creer par <span>AXE-Z</span></li>
        </ul>
      </div>
    )
};


export default Navigation
