import React from 'react'
import { Link } from 'react-router-dom';

import menuIcon from '../../images/menu-icon.png';

class Navbar extends React.Component {
  constructor(props) {
  super(props);

  this.state = {}

  this.handleScroll = this.handleScroll.bind(this);
  }
  
  handleScroll() {
    this.setState({
      scroll: window.scrollY
    });
  }

  componentDidMount() {
    const element = document.querySelector('nav')
    this.setState({
      top: element.offsetTop,
      height: element.offsetHeight
    });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top ? document.body.style.paddingTop = `${this.state.height}px` : document.body.style.paddingTop = 0;
  }

  render() {
    return (
      <nav className= {this.state.scroll > this.state.top ? 'scrolled fixed-nav navbar navbar-expand navbar-dark fixed-top align-content-right' : 'navbar navbar-expand navbar-dark fixed-top align-content-right'}>
        <img src={menuIcon} alt="menu icon" id="menu-icon" /> 
        <ul className="navbar-nav">
            <Link to="/" className="nav-item">About Me</Link>
            <Link to="/blog" className="nav-item">Blog</Link>
            <Link to="/resume" className="nav-item">Resume</Link>
        </ul>
      </nav>
    )
  }
}

export default Navbar