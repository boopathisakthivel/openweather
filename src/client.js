import React from 'react'
import {hydrate} from 'react-dom'

import App from './app/App';

hydrate(
     <App />,
    document.querySelector('#ow-app')
);
