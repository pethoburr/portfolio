import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = React.lazy(() => import('./App'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div className='loading'><p>loading...</p></div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);

