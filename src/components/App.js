import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Articles from './routes/Articles';
import NotFound from './routes/NotFound';
import UserForm from './UserForm';
import Select from 'react-select';
import Filters from './Filters';
import Counter from './Counter';
import 'react-select/dist/react-select.css';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <h2>Main menu</h2>
                        <div><NavLink to="/counter" activeStyle={{color: "red"}}>Counter</NavLink></div>
                        <div><NavLink to="/filters"  activeStyle={{color: "red"}}>Filters</NavLink></div>
                        <div><NavLink to="/articles"  activeStyle={{color: "red"}}>Articles</NavLink></div>
                    </div>
                    {/* <Counter /> */}
                    <UserForm />
                    <Switch>
                        <Route path="/counter" component = {Counter} />
                        {/* <Filters articles = {[]} /> */}
                        <Route path="/filters" component = {Filters} />
                        {/* <ArticleList /> */}
                        <Route path="/articles" component = {Articles} />
                        <Route path="*" component = {NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;