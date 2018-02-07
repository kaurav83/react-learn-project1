import React from 'react';
import {render} from 'react-dom';
// import ArticleList from './components/ArticleList';
import App from './components/App';
import {articles} from './fixtures';

// render(<ArticleList articles = {articles} />, document.getElementById('container'));
render(<App articles = {articles} />, document.getElementById('container'));