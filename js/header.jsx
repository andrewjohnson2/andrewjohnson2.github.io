import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive'

class Header extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      top: props.top,
    };
  }

  render() {
    return (
      <div id={'title'}>
        <MediaQuery query="(min-width: 1224px)">
          <h1 className={`text-center ${this.state.top ? 'display-1' : ''}`} id="name">Andrew Johnson</h1>
          <div className="text-center info h3">
            <a href='mailto::andrew@andrewjohnson.io'>
              Andrew@AndrewJohnson.io
            </a>
            &nbsp;&middot;&nbsp;
            <a href="tel:7022416598">702.241.6598</a>
            {/* &nbsp;&middot;&nbsp; */}
            {/* <a className="pt-2" href="AndrewJohnsonResume.pdf" target="_blank">
              Resume
            </a> */}
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 1224px)">
          <h1 className={`text-center ${this.state.top ? 'display-4' : ''}`} id="name">Andrew Johnson</h1>
          <div className="text-center info h3">
            <a href='mailto::andrew@andrewjohnson.io'>
              Andrew@AndrewJohnson.io
            </a>
            <div className="pt-2">
            <a href="tel:7022416598">702.241.6598</a>
            {/* &nbsp;&middot;&nbsp; */}
            {/* <a className="pt-2" href="" target="_blank">
              Resume
            </a> */}
          </div>
          </div>
        </MediaQuery>
        <div className="pt-2 text-center">
          {/* <Link role="button" to={{ pathname: '/#projects' }} name="button" className="btn btn-outline-primary m-*-auto">
            Projects
          </Link>
          &nbsp;
          <Link role="button" to={{pathname: '/#experiences'}} name="button"
                className="btn btn-outline-primary m-*-auto">
            Experiences
          </Link> */}
          {/* &nbsp;
          <a role="button" href='/pics.html' name="button" className="btn btn-outline-primary m-*-auto">
            Pictures
          </a>
          &nbsp;
          <a role="button" href='AndrewJohnsonResume.pdf' name="button" className="btn btn-outline-primary m-*-auto">
            Resume
          </a> */}
        </div>
      </div>
    );
  }
};

Header.propTypes = {
  top: PropTypes.bool.isRequired,
};

export default Header;
