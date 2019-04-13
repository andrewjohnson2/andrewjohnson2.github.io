import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      subtitle: this.props.subtitle,
      description: this.props.description,
    };
  }

  render() {
    return (
      <div>
        <h4>{this.state.title}</h4>
        <h6>{this.state.subtitle}</h6>
        <div>{this.state.description}</div>
      </div>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string.isRequired, // eslint-disable-line
  subtitle: PropTypes.string.isRequired, // eslint-disable-line
  description: PropTypes.string.isRequired, // eslint-disable-line
};

export default Item;