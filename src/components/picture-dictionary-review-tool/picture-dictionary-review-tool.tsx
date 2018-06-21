
import * as React from 'react';
import { observer } from 'mobx-react';

import { Language, LanguageSelectionPage } from '../language-selection/language-selection';
import { Role, RoleSelectionPage } from '../role-selection/role-selection';
import { LocReviewPage } from '../loc-review-page/loc-review-page';
import { ReviewStage, ReviewState } from '../../states/review.state';
import { Test } from '../test-page';
import * as Utils from '../../shared/utilities';


@observer
export class PictureDictionaryReviewTool extends React.Component {

  private _reviewState: ReviewState;
  private _language: Language;
  private _role: Role;


  constructor() {
    super();
    this._reviewState = new ReviewState();
  }

  componentDidMount() {
    // URL should look something like http://localhost:3000/?lang=de&role=loc
    const param1: string = Utils.getQueryParameterByName("lang");
    const param2: string = Utils.getQueryParameterByName("role");

    var language: Language = Language[param1];
    var role: Role = Role[param2];

    // If language and role are given in query param, skip selection pages and jump to review page based on the given role.
    if (language != null && role != null) {
      this._reviewState.currentStage = ReviewStage.Review;
      this._reviewState.language = language;
      this._reviewState.role = role;
    }
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
        switch (this._reviewState.role) {
          case Role.loc:
            component = <LocReviewPage reviewState={this._reviewState} />;
            break;
          case Role.other:
            // Role Other is the same as Role Loc. Just for better UX.
            component = <LocReviewPage reviewState={this._reviewState} />;
            break;
          default:
            component = <Test />; //TODO
        }
        break;

      default:
    }

    return (
      <div>
        {component}
      </div>

    );
  }
}



