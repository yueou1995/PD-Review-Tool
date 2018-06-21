//-----------------------------------------------------------------------
// <copyright file="loc-review-page.tsx" company="Microsoft">
// © Microsoft. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

import * as React from 'react';
import { ReviewState } from '../../states/review.state';


export interface ILocReviewPageProps {
	reviewState?: ReviewState;
}

export class LocReviewPage extends React.Component<ILocReviewPageProps, {}> {
	render() {
		console.log(this.props.reviewState);

		return (
			<div>
                <h1>Loc Review Page</h1>
								Language = {this.props.reviewState.language}; //TODO
								
			</div>
		);
	}
}