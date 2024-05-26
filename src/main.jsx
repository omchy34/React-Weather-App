
import React from '/React-Weather-App/react.production.min.js';
import ReactDOM from '/React-Weather-App/react-dom.production.min.js';

import App from './App'; // Assuming your main React component is in App.jsx

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
