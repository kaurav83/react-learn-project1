import React from 'react';
import {render} from 'react-dom';
// import ArticleList from './components/ArticleList';
import Root from './components/Root';
import {articles} from './fixtures';

// render(<ArticleList articles = {articles} />, document.getElementById('container'));
render(<Root />, document.getElementById('container'));