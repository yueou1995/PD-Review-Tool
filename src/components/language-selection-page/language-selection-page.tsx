//-----------------------------------------------------------------------
// <copyright file="language-selection-page.tsx" company="Microsoft">
// © Microsoft. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

import * as React from 'react';
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { PictureDictionaryReviewTool } from '../picture-dictionary-review-tool/picture-dictionary-review-tool';
import { ReviewStage, ReviewState } from '../../states/review.state';

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