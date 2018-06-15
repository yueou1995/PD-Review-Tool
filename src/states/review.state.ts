//-----------------------------------------------------------------------
// <copyright file="review.state.ts" company="Microsoft">
// © Microsoft. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

import { observable } from 'mobx';

export enum ReviewStage {
    LanguageSelection,
    RoleSelection,
    Review
}

export class ReviewState {
  
  @observable
  currentStage: ReviewStage = ReviewStage.LanguageSelection;  

}