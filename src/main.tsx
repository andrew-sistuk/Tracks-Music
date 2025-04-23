import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'modern-normalize';
import './index.css';
import './reset.css';

import { BrowserRouter } from 'react-router-dom';

// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import {
  appState,
  // , persistor
} from '@/myRedux';
import { SheetData } from '@/layouts/SheetData/SheetData';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={appState}>
      {/*<PersistGate persistor={persistor}>*/}
      <BrowserRouter>
        <SheetData>
          <App />
        </SheetData>
      </BrowserRouter>
      {/*</PersistGate>*/}
    </Provider>
  </React.StrictMode>,
);

