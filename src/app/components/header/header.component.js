import React from 'react';

import './header.component.css';

const Header = props => {
    return (
        <nav className="c-nav c-nav--fixed">
            <a href="#" className="c-logo">BASE</a>
            <a href="http://www.codedeveloper.co.uk" className="c-nav--link">CodeDeveloper Website</a>
            <a href="/" className="c-nav--link" className={props.page === 'home' ? 'is-active' : ''}><i class=" material-icons">home</i> Home</a>
            <a href="/add" className="c-nav--link" className={props.page === 'add' ? 'is-active' : ''}><i class=" material-icons">add</i> Add</a>
        </nav>
    );
};

export default Header;
