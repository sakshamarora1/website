import React from "react"
import './App.css';
import Home from "./pages/Home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  
  return (
    <Router>
  <div>
  
  
  <Switch>
  <Route exact path="/">
    <Home/>
    </Route>


    {/* <Route exact path="/about">
    <h1>About Page</h1>
    </Route> */}
    {/* <Route exact path="/browse">
    <Browse/>
    </Route> */}
   
{/* 
    <Route
           exact
            path="/user/:uid"
            render={(props) => {
              const uid = props.match.params.uid;
              return<h1>{uid}</h1>;
            }}
           
          /> */}

       
          
          

   
   
  </Switch>
</div>
</Router>
  );
}

export default App;
