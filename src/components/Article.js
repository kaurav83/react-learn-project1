import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
// import toggleOpen from '../decorators/toggleOpen';
import {CSSTransitionGroup} from 'react-transition-group';
import './article.css';
import {deleteArticle, loadArticle} from '../AC/index';
import {connect} from 'react-redux';
import Loader from './Loader';

class Article extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string
        })
    }

    state = {
        updateIndex: 0,
        areCommentsOpen: false
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('---', 'updating', this.props.isOpen, nextProps.isOpen);
    // }

    // componentWillReceiveProps({isOpen, loadArticle, article}) {
    //     if (isOpen && !article.text && !article.loading) loadArticle(article.id)
    // }

    componentDidMount() {
        const {loadArticle, article, id} = this.props;
        if (!article || (!article.text && !article.loading)) loadArticle(id)
    }

    // componentWillMount() {
    //     console.log('---', 'mounting');
    // }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        if (!article) return null;
        console.log(this.props, 'this.props');
        // const {isOpen} = this.state; - передали isOpen в объект строкой выше, чтобы он читался не из стейтов, а из props
        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                {/* <button onClick = {this.toggleOpen}>{isOpen ? 'open' : 'close'}</button> */}
                <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                <button onClick = {this.handleDelete}>Delete</button>
                <CSSTransitionGroup
                    transitionName = 'article'
                    transitionEnterTimeout = {300}
                    transitionLeaveTimeout = {300}
                >
                    {this.getBody()}    
                </CSSTransitionGroup>
            </div> 
        )
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
        console.log('---', 'deleting article');
    }

    setContainerRef = ref => {
        this.container = ref;
        console.log('---', ref);
    }

    // componentDidMount() {
    //     console.log('---', 'mounted');
    // }

    getBody() {
        const {article, isOpen} = this.props;
        // if (!this.state.isOpen) return null
        if (!isOpen) return null
        // const {article} = this.props;
        if (article.loading) return <Loader/>
        return (
            <section>
                {article.text}
                <button onClick = {() => this.setState({updateIndex: this.state.updateIndex + 1})}>update</button>
                <CommentList article = {article} ref = {this.setCommentsRef} key = {this.state.updateIndex} />
            </section>
        )
    }

    setCommentsRef = ref => {
        console.log('---', ref);
        this.comments = ref;
    }

    // toggleOpen = (ev) => { - перенесли в декоратор (toggleOpen.js) WrapperComponent
    //     ev.preventDefault();
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     })
    // }
}

export default connect((state, ownProps) => ({
    article: state.articles.entities.get(ownProps.id)
}), {deleteArticle, loadArticle})(Article);