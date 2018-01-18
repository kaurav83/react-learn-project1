import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class WrapperComponent extends ReactComponent {
    state = {
        isOpen: false
    }
    
    render() {
        return <OriginalComponent {...this.props} /* {...this.state} или isOpen = {this.state.isOpen} */ 
        isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen} />
    }

    toggleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}