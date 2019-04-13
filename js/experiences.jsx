import React from 'react';
import ItemGroup from './itemGroup';
import Header from './header';

class Experiences extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="pt-3">
          <Header top={false} />
          <ItemGroup content={'Education'} />
          <ItemGroup content={'Work Experience'} />
        </div>
      </div>
    );
  }
}

export default Experiences;
