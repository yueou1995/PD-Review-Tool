import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {AppState} from './components/review-tool';
import {TimerView} from './components/review-tool';


const appState = new AppState();
ReactDOM.render(<TimerView appState={appState} />, document.getElementById('root'));
