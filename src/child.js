import React, { Component } from 'react';

class Child extends Component {
    state = {
        child: {
            value: 'Child Class'
        }
    }

    load = () => {
        this.props.data.changeParent(this.state.child.value)
    }

    componentDidMount() {
        this.load()
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Child