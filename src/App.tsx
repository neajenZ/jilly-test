import React from 'react';
import BeanList from './components/beanList/beanList';
import { Routes, Route } from 'react-router-dom';
import { BeansProvider } from './shared/store/context';

function App() {
  return (
    <Routes>
      <Route path='/' element={<BeansProvider><BeanList /></BeansProvider>} />
    </Routes>
  );
}

export default App;
