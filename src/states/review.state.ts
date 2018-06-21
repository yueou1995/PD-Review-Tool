//-----------------------------------------------------------------------
// <copyright file="review.state.ts" company="Microsoft">
// © Microsoft. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

import { observable } from 'mobx';
import { Language } from '../components/language-selection/language-selection'
import { Role } from '../components/role-selection/role-selection'

export enum ReviewStage {
  LanguageSelection,
  RoleSelection,
  Review
}

export class ReviewState {

  @observable
  currentStage: ReviewStage = ReviewStage.LanguageSelection;

  
  @observable
  language: Language = Language.en;

  @observable
  role: Role = Role.other;



}