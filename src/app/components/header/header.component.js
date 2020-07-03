import React, {Component} from 'react';

import './header.component.css';

const Header = props => {
    return (
        <nav className="c-nav c-nav--fixed">
            <a href="#" className="c-logo">BASE</a>
            <a href="http://www.codedeveloper.co.uk" className="c-nav--link">CodeDeveloper Website</a>
            <a href="javascript:void(0)" className="c-nav--link"><i class=" material-icons">home</i> Home</a>
        </nav>
    );
}

export default Header;
