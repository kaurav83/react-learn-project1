// import React, {Component} from 'react';
// import Comment from './Comment';
// import toggleOpen from '../decorators/toggleOpen';

// class CommentList extends Component {
//     // static defaultProps = {  если мы не хотим делать подобную проверку if (!comments ) в getBody()
//     //     comments: []
//     // }
//     state = {
//         isOpen: false
//     }

//     render() {
//         const text = this.state.isOpen ? 'hide comments' : 'show comments';
//         return (
//             <div>
//                 <button onClick = {this.toggleOpen}>{text}</button>
//                 {this.getBody()}
//             </div>
//         )
//     }

//     getBody() {
//         if (!this.state.isOpen) return null;

//         const {comments} = this.props;
//         if (!comments || !comments.length) return <p>No comments yet</p>;

//         return (
//             <ul>
//                 {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
//             </ul>
//         )
//     }

//     toggleOpen = ev => this.setState({
//         isOpen: !this.state.isOpen
//     })
// }

// export default CommentList;

import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {
    // static defaultProps = {  если мы не хотим делать подобную проверку if (!comments ) в getBody()
    //     comments: []
    // }

    // state = {
    //     isOpen: false
    // }

    static defaultProps = {  
        comments: []
    }

    render() {
        const text = this.props.isOpen ? 'hide comments' : 'show comments';
        return (
            <div>
                <button onClick = {/* this.toggleOpen */ this.props.toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        // if (!this.state.isOpen) return null;

        const {comments, isOpen} = this.props;
        if (!isOpen) return null;
        if (!comments.length) return <p>No comments yet</p>;

        return (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
            </ul>
        )
    }

    // toggleOpen = ev => this.setState({ - отправляем вызов toggleOpen сразу на кнопку в render, используя этот метод как свойство props
    //     isOpen: !this.state.isOpen
    // })
}

export default toggleOpen(CommentList);