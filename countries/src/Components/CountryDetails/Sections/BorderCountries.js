import React from 'react'

export default function BorderCountries(props) {
    const BorderCountries = props.border_countries;
    console.log(BorderCountries)
    return (
        <div>
        <h3>Border Countries</h3>
        <div className="border_countries_list">
            {BorderCountries.map((country, index)=>(<li key={index} className="tag">{country}</li>))}
        </div>    
        </div>
    )
}
