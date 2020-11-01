import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import BorderCountries from './Sections/BorderCountries'
import {useHistory} from 'react-router-dom';


export default function CountryDetailsComponent(props) {
    const countryName = props.match.params.name;
    const [Country, setCountry] = useState([]);
    const [load, setLoad] = useState(false);

    let history = useHistory();

    useEffect(() => {
        Axios.get('https://restcountries.eu/rest/v2/name/'+countryName)
        .then(res=>{
          setCountry(res.data[0])
          setLoad(true);
        })
        .catch(err=>{
        })
        
  }, [])
    console.log(Country.currencies);
    if(load){
    return (

      <div>
        <div className="back_button" onClick={()=>history.goBack()}>&larr; Back</div>

        <div className="countryDetailPage">
        
          <img src={Country.flag} alt="" className="country_flag"/>
          <div className="country_details">
              <ul>
                  <li>Native Name: {Country.nativeName}</li>
                  <li>Population: {Country.population}</li>
                  <li>Region: {Country.region}</li>
                  <li>Sub Region: {Country.subregion}</li>
                  <li>Capital: {Country.capital}</li>
              </ul>
            
              <ul>
              <li>Top level domain: {Country.topLevelDomain.map(domain=>domain)}</li>
              <li>Currencies: {Country.currencies.map(currency=>currency.name)}</li>
              <li>Languages: {Country.languages.map(laguage=>laguage.name + ', ')}</li>
             
              </ul>

              <BorderCountries border_countries={Country.borders}/>
             
          </div>
        </div>

      </div>
    )
    }
    else{
      return <div>Loading</div>
    }
}
