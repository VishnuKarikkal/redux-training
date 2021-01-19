import React, { Component } from 'react'
import './css/style.css';


export default class Child extends Component {
    constructor(props)
    {
        super(props)
        this.state = 
        {
            stateChild : "PEACE!"
        }
    }
    
     render() {
        return (
            <div>
                <h3>Child Compo 
                    <span 
                onClick={()=>
                        {
                        this.setState(prev=>({stateChild : "WAR"}))
                        }}
                    >
                    {this.state.stateChild}
                    </span>
                </h3>
            </div>
        )
    }
}

