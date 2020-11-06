import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Layout from './components/Layout/Layout'
import axios from 'axios';
import { render } from '@testing-library/react'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/home'


function App(){
  return (
    <Router>
    <Layout>


      <NavBar />
      <div className="body">
        <Switch>

          <Route
            path="/home"
            render={(props) => {
              return <Home />;
            }}
          />
        

        </Switch>
      </div>

    </Layout>
</Router>
  );
}
export default App 