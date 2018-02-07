import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from '../decorators/accordion';

class ArticleList extends Component {
    // state = {
    //     openArticleId: null
    // }
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }
    render() {
        // const articleElements = this.props.articles.map(article => <li key={article.id}>
        const {articles, openItemId, toggleOpenItem} = this.props;
        console.log(this.props, 'from ArticleList.js')
        const articleElements = articles.map(article => <li key={article.id}>
            <Article 
                article = {article} 
                // isOpen = {article.id === this.state.openArticleId}
                isOpen = {article.id === openItemId}
                // toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    // toggleOpenArticle(openArticleId) {
    //     this.setState({ openArticleId })
    // }
}

export default accordion(ArticleList);