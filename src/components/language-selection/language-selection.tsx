//-----------------------------------------------------------------------
// <copyright file="language-selection.tsx" company="Microsoft">
// © Microsoft. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

import * as React from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ReviewStage, ReviewState } from '../../states/review.state';

//TODO
export enum Language {
  en = 'English',
  fr = 'French',
  de = 'German'
}

export interface ILanguageSelectionProps {
	reviewState?: ReviewState;
}

export class LanguageSelectionPage extends React.Component<ILanguageSelectionProps, {}> {
	render() {
		return (
			<div>
				<Dropdown
					placeHolder="English"
					label="Please select your language"
					id="LanguageDropdown"
					defaultSelectedKey="B"
					options={[
						{ key: 'A', text: 'Chinese' },
						{ key: 'B', text: 'English' },
						{ key: 'C', text: 'French' },
						{ key: 'D', text: 'German' },
						{ key: 'E', text: 'Spanish' },
					]}>
				</Dropdown>

				<DefaultButton
					text="Next"
					onClick={() => this.props.reviewState.currentStage = ReviewStage.RoleSelection}
				/>
			</div>

		);
	}
}