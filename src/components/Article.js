import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import toggleOpen from '../decorators/toggleOpen';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }

    // constructor(props) { - перенесли состояние в декоратор (toggleOpen.js, внутрь класса WrapperComponent)
    //     super(props);
    //     this.state = {
    //         isOpen: false
    //     }
    // }
    componentWillReceiveProps(nextProps) {
        console.log('---', 'updating', this.props.isOpen, nextProps.isOpen);
    }

    componentWillMount() {
        console.log('---', 'mounting');
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        // const {isOpen} = this.state; - передали isOpen в объект строкой выше, чтобы он читался не из стейтов, а из props
        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                {/* <button onClick = {this.toggleOpen}>{isOpen ? 'open' : 'close'}</button> */}
                <button onClick = {toggleOpen}>
                    {isOpen ? 'open' : 'close'}
                </button>
                {this.getBody()}
            </div> 
        )
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
                <CommentList comments = {article.comments} />
            </section>
        )
    }

    // toggleOpen = (ev) => { - перенесли в декоратор (toggleOpen.js) WrapperComponent
    //     ev.preventDefault();
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     })
    // }
}

export default Article;