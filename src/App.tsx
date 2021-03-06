import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Routes />
    <GlobalStyles />
  </Router>
);

export default App;
