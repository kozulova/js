import React, { useEffect, useState, useContext } from 'react'
import CountryCard from './CountryCard'
import RegionFilterComponent from './ui/RegionFilterComponent'
import {ThemeContext} from './../contexts/ThemeContext'
import {ContriesContext} from './../contexts/ContriesContext'
import HeaderComponent from './ui/HeaderComponent'

function MainComponent() {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark
    const {countries} = useContext(ContriesContext)


  const showCountries = ()=>{
    if(countries){
      console.log(countries)
      return countries.map((country, index)=>(
        <CountryCard country={country} key={index}/>
      
      ))
    }
    else{
      return (<div>Loading</div>)
    }
  }
  
  console.log(isLightTheme);
  return (
      
    <div className="main" style={{background: theme.background}}>
        
        <RegionFilterComponent/>      

        <div className="countries">
        {showCountries()}
        </div>
        
    </div>

  );
}

export default MainComponent;