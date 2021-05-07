import React from 'react';
import podekex from '../pokedex.png';
import '../css/Header.css'


class Header extends React.Component{
    render(){
        return(
            <div>
                <img src={podekex} className="Pokedex-logo"/>
            </div>
        );
    }
}

export default Header;
