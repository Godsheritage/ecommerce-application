import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/style.css'
import './assets/styles/animate.css'
//TODO delete these imports
// import './assets/styles/flaticon.css'
// import './assets/styles/font-awesome.min.css'
// import './assets/styles/jquery-ui.min.css'
// import './assets/styles/owl.carousel.min.css'
import './assets/styles/slicknav.min.css'
import './assets/styles/bootstrap.min.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

