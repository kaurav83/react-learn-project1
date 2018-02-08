import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../AC/index';

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number
    };
    
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }

    handleIncrement = () => {
        this.props.increment(); 
    }
}

function mapStateToProps(state) {
    return {
        counter: state.count
    };
}

const mapToDispatch = { increment };

const decorator = connect(mapStateToProps, mapToDispatch);
console.log(mapToDispatch, 'str 36')

export default decorator(Counter);