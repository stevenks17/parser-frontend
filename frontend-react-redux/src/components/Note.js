import React, { Component } from 'react'


import Card from 'react-bootstrap/Card'

class Note extends Component {
    render() {
        // conditional to render content using buttons if already saved
        if (this.props.graph) {
            console.log(this.props.note)
            return (
                <Card className="text-center">
                    <Card.Body>
                    <Card.Header>  Observation Notes </Card.Header>

                        <Card.Text>
                            {this.props.note.content}
                        </Card.Text>
                    </Card.Body>


                </Card>
            )
        // renders only when content is not yet saved to db
        } else {
            return (
                <Card className="text-center">
                    <Card.Body>
                        <Card.Header>  Observation Note </Card.Header>
                        <Card.Title>
                            {this.props.note.content}
                        </Card.Title>
                    </Card.Body>
                </Card>

            )
        }
    }
}


export default Note