import React, {Component} from 'react';

import Header from "./components/header/header.component";
import find from './functions/global.functions'

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null
        };
    }

    componentDidMount() {}

    render() {
        return (
            <div className='App'>
                <Header
                    item={this.state.item}
                />

                <div className="c-container">
                    <section className="c-page">
                        <h1>BASE - A React Framework Seed</h1>

                        <p>This site contains code snippets to help setup your app more quickly.</p>

                        <p>This site also uses STYL by CodeDeveloper, a super lightweight UI theme only 82kb</p>
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
