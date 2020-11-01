import React, {useContext, useState} from 'react'
import {ContriesContext} from './../../contexts/ContriesContext'

export default function RegionFilterComponent() {
  const {searchByRegion, searchCountriesByName} = useContext(ContriesContext)
  const [Region, setRegion] = useState("Africa");
  const [Search, setSearch] = useState('');
const Regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const handleChangeRegion = (event)=>{
    setRegion(event.target.value);
    searchByRegion(event.target.value);
}

const handleSearchRegion = (event)=>{
  event.preventDefault();
  searchCountriesByName(Search);
  console.log("search " + Search);
}

const handleSearchChange = (event)=>{
  setSearch(event.target.value);
}

const showRegions = () =>{
        return Regions.map((region, index)=>{
          return <option key={index} value={region}>{region}</option>
        })
       }

    return (
        <div>
        <div className="filters_section">
        <form onSubmit={handleSearchRegion}>
        <input type="text" placeholder="Search for countries" value={Search} onChange={handleSearchChange}/>
        </form>
        <select value={Region} onChange={handleChangeRegion}>
          {showRegions()}
        </select>
        </div>
        </div>
    )
}
