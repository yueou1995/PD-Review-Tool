//-----------------------------------------------------------------------
// <copyright file="language-selection-page.tsx" company="Microsoft">
// © Microsoft. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

import * as React from 'react';
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';


export class LanguageSelectionPage extends React.Component {
	render() {
		return (
			<div>
				Please select your language.

				<Dropdown
					placeHolder="Please select your language"
					label="Basic uncontrolled example:"
					id="Basicdrop1"
					ariaLabel="Basic dropdown example"
					options={[
						{ key: 'Header', text: 'Actions', itemType: DropdownMenuItemType.Header },
						{ key: 'A', text: 'Option a', title: 'I am option a.' },
						{ key: 'B', text: 'Option b' },
						{ key: 'C', text: 'Option c', disabled: true },
						{ key: 'D', text: 'Option d' },
						{ key: 'E', text: 'Option e' },
						{ key: 'divider_2', text: '-', itemType: DropdownMenuItemType.Divider },
						{ key: 'Header2', text: 'People', itemType: DropdownMenuItemType.Header },
						{ key: 'F', text: 'Option f' },
						{ key: 'G', text: 'Option g' },
						{ key: 'H', text: 'Option h' },
						{ key: 'I', text: 'Option i' },
						{ key: 'J', text: 'Option j' }
					]}>
				</Dropdown>

			</div>

		);
	}
}