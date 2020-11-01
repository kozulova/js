import React from 'react'
import {Link} from 'react-router-dom';

export default function CountryCard(props) {
    let country = props.country;
    return (
        
        <li className="country_card" style={{height: "400px"}}>
 
        <Link  to={'country/'+ country.name}>
        <div className="flag" style={{backgroundImage: `url(${country.flag})`,
         backgroundPosition:"top", backgroundSize: "cover", height: "200px", borderRadius: "10px 10px 0 0"}}></div>
        {/*<img src={country.flag} alt={`${country.name} flag`} style={{width: '260px', height: '160px'}}/>*/}
        </Link>
        <div className="contry-data">
        <h3>{country.name}</h3>
        
        Population: {country.population}
        <br/>
        Region: {country.region}
        <br/>
        Capital: {country.capital}
        </div>
        
        </li>
        
    )
}
