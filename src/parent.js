import React, { Component } from 'react'
import Child from './child'

class Parent extends Component {
    state = {
        parent: {
            value: ''
        }
    }

    changeParent = (n) => {
        this.setState(state => (state.parent.value = n))
    }
    
    render() {
        return (
            <div>
                <Child data={{changeParent: this.changeParent}} />
                <div>
                    Parent Class: {this.state.parent.value}
                </div>
            </div>
        )
    }
}

export default Parent