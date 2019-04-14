import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
        <h1 className={`text-center ${this.state.top ? 'display-1' : ''}`} id="name">Andrew Johnson</h1>
        <h5 className="text-center">
          <a href="tel:7022416598">702.241.6598</a>
          &nbsp;&middot;&nbsp;
          <a href='mailto::andrew@andrewjohnson.io'>
            Andrew@AndrewJohnson.io
          </a>
          &nbsp;&middot;&nbsp;
          <a href="AndrewJohnsonResume.pdf" target="_blank">
            Resume
          </a>
        </h5>
        <div className="pt-2 text-center">
          <Link role="button" to={{pathname: '/#experiences'}} name="button"
                className="btn btn-outline-primary m-*-auto">My
            Experiences
          </Link>
          &nbsp;
          <Link role="button" to={{pathname: '/#projects'}} name="button" className="btn btn-outline-primary m-*-auto">My
            Projects
          </Link>
        </div>
      </div>
    );
  }
};

Header.propTypes = {
  top: PropTypes.bool.isRequired,
};

export default Header;