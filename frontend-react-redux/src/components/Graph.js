import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

// this can be considered a stateless component since its not connected to redux store. Data is being passed down from parent.
class Graph extends Component {
    render () {
        return (
            <Card.Body>
                <Card.Title as="p">{this.props.graph.name}</Card.Title>
                <Card.Img variant="top" src={this.props.graph.screenshot_url} />
            </Card.Body>
        )
    }
}


export default Graph