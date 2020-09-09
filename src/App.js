import React from 'react';
import "./page.css"

import { Container } from './components'
import { productList } from './data/productList'

function App() {
  return <Container productList={productList}/>
}

export default App;
