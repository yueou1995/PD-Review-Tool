//-----------------------------------------------------------------------
// <copyright file="role-selection.tsx" company="Microsoft">
// © Microsoft. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

import * as React from 'react';
import { Dropdown} from 'office-ui-fabric-react/lib/Dropdown';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ReviewStage, ReviewState } from '../../states/review.state';

export enum Role {
  geopol = 'Geo Pol',
  designer = 'Designer',
  loc = 'Language Expert',
  admin = 'Admin',
  other = 'Other'
}

export interface IRoleSelectionProps {
	reviewState?: ReviewState;
}

export class RoleSelectionPage extends React.Component<IRoleSelectionProps, {}> {
	render() {
		return (
			<div>
				<Dropdown
					placeHolder="English"
					label="Please select your role"
					id="LanguageDropdown"
					defaultSelectedKey="B"
					options={[
						{ key: 'A', text: 'GeoPol' },
						{ key: 'B', text: 'Designer' },
						{ key: 'C', text: 'Language Expert' },
						{ key: 'D', text: 'Other' },
						{ key: 'E', text: 'Admin' },
					]}>
				</Dropdown>

				<DefaultButton
					text="Start Review"
					onClick={() => this.props.reviewState.currentStage = ReviewStage.Review}
				/>

			</div>

		);
	}
}