import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../app/App'
import { worker } from '../mocks/browser';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from '../app/store';

const root = createRoot(document.getElementById('root'));
worker.start();

root.render(
  <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </StrictMode>
)
