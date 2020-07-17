// builtin methods
import React, { Component } from 'react'

// allows routing by updating browser url and rendering needed component 
import { NavLink } from 'react-router-dom'


// bootstrap styling
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


// render buttons in navlink in ref to graph.id
class InteractButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            upvotes: 0,
            show:true
        }
    }

    

    incrementvote = () => {
        this.setState(prevState => ({upvotes: prevState.upvotes +1}))
    }

    render() {
        return (
            <Card.Footer>
                <NavLink 
                    style={{ marginRight: '10px' }} 
                    to={`/graphs/${this.props.graph.id}/interact`}
                    url={this.props.graph.screenshot_url} >
                    <Button variant="primary" >
                        Interact
                    </Button>
                </NavLink>
            
                <NavLink
                    style={{ marginRight: '10px'}}
                    to={`/graphs/${this.props.graph.id}/speculations`}
                    url={this.props.graph.screenshot_url} >
                        <Button variant="success" >
                            Speculations
                        </Button>
                </NavLink>

                <div>
                    
                    <Button
                        size="sm" 
                        variant="dark"
                        style={{marginLeft: '10px'}}
                        onClick={this.incrementvote}> Reliability Rating: {this.state.upvotes} 
                    </Button>
                </div>
            </Card.Footer>
        )
    }
}

export default InteractButton
