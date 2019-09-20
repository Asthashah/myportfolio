import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {/*generated code*/}
       <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 style ={{ color: "#f0ffff" }} className="responsive-headline">I'm Astha Shah </h1>
            <h4 style={{color:"white",padding:"20px"}}>CREATIVE-PROFESSIONAL-PASSIONATE</h4>
            <h3 style={{color:"white"}}>SOFTWARE DEVELOPER</h3>
            {/* <h3 style ={{ color: "#FFBAC7" }} > <a className="smoothscroll" href="#about" style ={{ color: "#FFBAC7" }}>about me</a>.</h3> */}
            <hr />
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
      </React.Fragment>
    );
  }
}