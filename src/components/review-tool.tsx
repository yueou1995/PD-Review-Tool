import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { LanguageSelectionPage } from './language-selection-page';


export class ReviewTool extends React.Component {
  render() {
    return (
      <div>
        <LanguageSelectionPage />
      </div>
    );
  }
}