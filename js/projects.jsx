import React from 'react';
import Header from "./header";
import ItemGroup from './itemGroup';

class Projects extends React.Component {
  render() {
    return (
      <div className="container center">
        <div className="pt-3">
          <Header top={false} />
          <ItemGroup content={'Projects'}/>
        </div>
      </div>
    );
  }
}

export default Projects;
