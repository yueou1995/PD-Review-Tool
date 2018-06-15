import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { LanguageSelectionPage } from './language-selection-page';
import { RoleSelectionPage } from './role-selection-page';
import { ReviewStage, ReviewState } from '../states/review.state';


@observer
export class PictureDictionaryReviewTool extends React.Component {

  private _reviewState: ReviewState;

  constructor() {
    super();
    this._reviewState = new ReviewState();
  }


  render() {

    let component: JSX.Element = null;

    switch (this._reviewState.currentStage) {
      case ReviewStage.LanguageSelection:
        component = <LanguageSelectionPage />;
        break;
      case ReviewStage.RoleSelection:
        component = <RoleSelectionPage />;
        break;
        //case ReviewStage.Review:
    }

    return (
      <div>
        {component}
      </div>
    );
  }
}