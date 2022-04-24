import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router ,Route} from 'react-router-dom'

function App() {
  return(
    <Router>
    <Route path="/" render={() => <Dashboard/>} exact/>
  </Router>
  )
}

export default App;
