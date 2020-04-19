import React from 'react'
import { renderToString } from 'react-dom/server'

import App from './app/App';

module.exports = function render() {
  let content = renderToString(
    <App />
  );

  return {content};
}