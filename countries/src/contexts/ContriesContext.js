import React, {createContext, useState, useEffect} from 'react'
import Axios from 'axios';
export const ContriesContext = createContext();

export default function ContriesContextProvider(props) {
    const allUrl = 'https://restcountries.eu/rest/v2/all'
    const regionUrl = 'https://restcountries.eu/rest/v2/region/';
    const [countries, setCountries] = useState([]);
    const [load, setLoad] = useState(false);
    const [Error, setError] = useState('');
    const [Url, setUrl] = useState(allUrl);
    

    useEffect(() => {
        Axios.get(Url)
        .then(res=>{
          setCountries(res.data)
          setLoad(true);
        })
        .catch(err=>{
          setError(err)
        })
        
  }, [Url])

  const searchByRegion = (region)=>{
        setUrl(regionUrl.concat(region));
        console.log(region);
  }

  const setFirstPage =()=>{
      console.log(countries.length);
      if(countries.length==0){
          setUrl(allUrl);
      }
  }

 
  const searchCountriesByName = (name)=>{
    console.log(name);
    const countriesByName = countries.filter((country)=>country.name==name);
    setCountries(countriesByName);
  }

    return (
        <div>
            <ContriesContext.Provider value={{countries, searchByRegion, searchCountriesByName, setFirstPage}}>
                {props.children}
            </ContriesContext.Provider>
        </div>
    )
}
