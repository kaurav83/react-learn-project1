import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
// import toggleOpen from '../decorators/toggleOpen';
import {CSSTransitionGroup} from 'react-transition-group';
import './article.css';
import {deleteArticle} from '../AC/index';
import {connect} from 'react-redux';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps(nextProps) {
        console.log('---', 'updating', this.props.isOpen, nextProps.isOpen);
    }

    componentWillMount() {
        console.log('---', 'mounting');
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
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

    componentDidMount() {
        console.log('---', 'mounted');
    }

    getBody() {
        const {article, isOpen} = this.props;
        // if (!this.state.isOpen) return null
        if (!isOpen) return null
        // const {article} = this.props;
        return (
            <section>
                {article.text}
                <CommentList comments = {article.comments} ref = {this.setCommentsRef} />
            </section>
        )
    }

    setCommentsRef = ref => {
        console.log('---', findDOMNode(ref));
    }

    // toggleOpen = (ev) => { - перенесли в декоратор (toggleOpen.js) WrapperComponent
    //     ev.preventDefault();
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     })
    // }
}

export default connect(null, {deleteArticle}) (Article);