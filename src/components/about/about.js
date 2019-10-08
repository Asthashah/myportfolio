import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profilepic.jpg" alt="" />
        </div>
        <div className="nine columns main-col">
          <p>A Software Engineer with experience and extensive education in Java, HTML/CSS, Javascript, ReactJS, AngularJS, SQL. An Excellent communicator with effective Interpersonal skills. Strong troubleshooting and problem-solving skills with an analytical mindset. A reliable and detailed-oriented individual looking to work as a Front End Developer developer.
          </p>
          <div className="row">
            <div className="columns download">
                  <a style = {{backgroundColor: '#0000'}}  href='AsthaShah_Resume.pdf' className="button"><i className="fa fa-download" />Download Resume</a>
            </div>
          </div> {/* end row */}
        </div> {/* end .main-col */}
      </div>
      </section>
      </React.Fragment>
    );
  }
}