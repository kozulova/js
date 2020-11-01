import React, {useContext} from 'react'
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {ThemeContext} from './../../contexts/ThemeContext'
import {Link} from 'react-router-dom';
import {ContriesContext} from './../../contexts/ContriesContext';

export default function HeaderComponent() {
  const {toggleTheme} = useContext(ThemeContext);
  const {setFirstPage} = useContext(ContriesContext);
    return (
        <header>
          <div className="header-top">
          <Link to="/" onClick={setFirstPage}><h1>Where is the word</h1></Link>
          
          <div className="mode" onClick={toggleTheme}><FontAwesomeIcon icon={faMoon} />Dark mode</div>
          </div>
        </header>
    )
}
