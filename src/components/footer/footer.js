import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            <li><a href="https://www.linkedin.com/in/astha-shah/"><i className="fa fa-linkedin" /></a></li>
            <li><a href="https://github.com/Asthashah"><i className="fa fa-github" /></a></li>
            {/* <li><a href="#"><i className="fa fa-skype" /></a></li> */}
          </ul>
          {/* <ul className="copyright">
            <li>© Copyright 2014 Astha</li>
          </ul> */}
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>  
      </footer>
      </React.Fragment>
    );
  }
}