import React from 'react';
import PropTypes from 'prop-types';
import content from '../content.json';
import Item from "./item";

class ItemGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: content[this.props.content],
    };
  }

  render() {
    return (
      <div>
        <div className="row align-items-center justify-content-center">
          <div className="col">
            <h2>{this.props.content}</h2>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col">
            {this.state.items.map(item => (
              <div className={'pb-4'}>
                <Item title={item.title} subtitle={item.subtitle} description={item.description}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

ItemGroup.propTypes = {
  content: PropTypes.string.isRequired, // eslint-disable-line
};

export default ItemGroup;