import React, { Component } from 'react';
import { white } from 'ansi-colors';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="contact">
        <div className="row">
          <div className="three columns">
          </div>
          <div className="nine columns main-col">
            <div className="row">
              <div className="columns contact-details">
                <h2 style={{color: 'white'}}>Contact Details</h2>
                <p className="address">
                  <span>Astha Shah</span><br />
                  <i style = {{ paddingRight: 10 }} className="fa fa-map-marker" />
                  <span>1167 Bolyston Street<br />
                       Boston, MA 02215 USA
                  </span><br />
                  <i style = {{ paddingRight: 10 }} className="fa fa-phone" />
                  <span>857-269-7278</span><br />
                  <i style = {{ paddingRight: 10 }} className="fa fa-envelope-o" />
                  <span>shah.ast@husky.neu.edu</span>
                </p>
              </div>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
      </section>
      </React.Fragment>
    );
  }
}