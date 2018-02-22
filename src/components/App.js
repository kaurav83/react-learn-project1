import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Select from 'react-select';
import Filters from './Filters';
import Counter from './Counter';
import 'react-select/dist/react-select.css';
import {HashRouter as Router, Route} from 'react-router-dom';

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Router>
                <div>
                    {/* <Counter /> */}
                    <UserForm />
                    <Route path="/counter" component = {Counter} />
                    {/* <Filters articles = {[]} /> */}
                    <Route path="/filters" component = {Filters} />
                    {/* <ArticleList /> */}
                    <Route path="/articles" component = {ArticleList} />
                </div>
            </Router>
        )
    }
}

export default App;