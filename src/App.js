import React from 'react';
import Layout from './components/layouts/Layout'
import HomePage from './pages/HomePage';
import fonts from './components/base/fonts'
import base from './components/base'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${base}
`

function App() {
  return (
      <div>
        <GlobalStyle />
        <Layout>      
          <HomePage></HomePage>
        </Layout>
      </div>
  );
}

export default App;