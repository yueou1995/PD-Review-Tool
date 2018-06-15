import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { LanguageSelectionPage } from './language-selection-page';
import { RoleSelectionPage } from './role-selection-page';
import { LocReviewPage } from './loc-review-page';
import { ReviewStage, ReviewState } from '../states/review.state';
import { Test } from './test-page';


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
        component = <LanguageSelectionPage reviewState={this._reviewState} />;
        break;
      case ReviewStage.RoleSelection:
        component = <RoleSelectionPage reviewState={this._reviewState} />;
        break;
      case ReviewStage.Review:
        component = <LocReviewPage />;
        break;
    }

    return (
      <div>
            {component}
          </div>
          );
        }
}