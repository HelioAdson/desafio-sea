import React from 'react';
import {Router} from '@reach/router';
import Home from './pages/Home';
import Form from './pages/Form';

const Notfound = () => <h1>404 - Not Found</h1>;

function App() {
  return (
    <div className="App">
      <Router>
      <Home exact path= "/"/>
      <Form exact path="/form"/>
      <Notfound default/>
      </Router>
    </div>
  );
}

export default App;
