import React, { Component } from 'react';
import '../App.css';
import TaskHooks from './TaskHooks';
import Home from './Home'
import Todo from './Todo'
import Post from './Post'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NavList from './NavList'
import PageNotFound from './PageNotFound'

function App()

{
   return(
   <div>
     <BrowserRouter>
      <NavList/> 
      <Switch>
         <Route path='/' exact component={Home}></Route>
         <Route path='/Todo' exact component={Todo}></Route>
         <Route path='/TaskHooks' exact component={TaskHooks}></Route>
         <Route path='/Post' exact component={Post}></Route>
         <Route component={PageNotFound}></Route>
      </Switch>
    
    </BrowserRouter></div>
   );
 
}

export default App;
