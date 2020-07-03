import React from 'react';

import './header.component.css';

const Header = props => {
    return (
        <nav className="c-nav c-nav--fixed">
            <a href="#" class="c-logo">BASE</a>
            <a href="http://www.codedeveloper.co.uk" className="c-nav--link">CodeDeveloper Website</a>
            <a href="/" className={props.page === 'home' ? 'c-nav--link is-active' : 'c-nav--link'}><i class=" material-icons">home</i> Home</a>
            <a href="/add" className={props.page === 'add' ? 'c-nav--link is-active' : 'c-nav--link'}><i class=" material-icons">add</i> Add</a>
        </nav>
    );
};

export default Header;
