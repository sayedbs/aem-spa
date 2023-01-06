import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <>
        {this.childComponents}
        {this.childPages}
      </>
    );
  }
}

export default withModel(App);
