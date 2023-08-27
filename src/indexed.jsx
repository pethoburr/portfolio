import React, { Suspense } from 'react';
import './index.css';

const App = React.lazy(() => import('./App'))
const Index = () => {
    render(
        <React.StrictMode>
    <Suspense fallback={<div className='loading'><p>loading...</p></div>}>
      <App />
    </Suspense>
  </React.StrictMode>
    )
}

export default Index;
