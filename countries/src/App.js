import React, { useEffect, useState } from 'react'
import MainComponent from './Components/MainComponent';
import CountryDetailsComponent from './Components/CountryDetails/CountryDetailsComponent';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HeaderComponent from './Components/ui/HeaderComponent'
import ThemeContextProvider from './contexts/ThemeContext'
import ContriesContextProvider from './contexts/ContriesContext'

function App() { 

  return (
    
    <BrowserRouter>   
    <div className="App">

    <ThemeContextProvider>
    <ContriesContextProvider>
    <HeaderComponent/>
    <Switch>
    <Route exact path="/" component={MainComponent}></Route>
    <Route exact path="/country/:name" component={CountryDetailsComponent}></Route>
    </Switch>
    </ContriesContextProvider>
    </ThemeContextProvider>  
    </div>
    </BrowserRouter>
   
  );
}

export default App;
