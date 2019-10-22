import React from 'react';
import './App.css';
import './assets/style.css';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import routes from './routes';
import Loading from './loading';

const loading = () => <Loading />;

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
          {renderRoutes(routes)}
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
