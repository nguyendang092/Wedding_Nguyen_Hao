import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from '../HomePage'
import BlogPage from '../blogpage'
import BlogDetailsPage from '../BlogDetailsPage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import './App.css';

const App = () => { 
  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/home' component={Homepage} />
            <Route path='/Blog' component={BlogPage} />
            <Route path='/Blog-details' component={BlogDetailsPage} />
          </Switch>
          <Footer/>
          <Scrollbar/>
      </Router>
    </div>
  );
}
export default App;