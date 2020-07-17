// import for built-in methods
import React, { Component } from 'react'



// import styling
import Card from 'react-bootstrap/Card'
//import Button from 'react-bootstrap/Button'

class Question extends Component {
    render() {
        // conditional to render content using buttons if saved already
        if (this.props.graph) {
            return (
                <Card className="text-center">
                    <Card.Body>
                        <Card.Header> Questions </Card.Header>
                        <Card.Text>
                            {this.props.question.content}
                        </Card.Text>
                    </Card.Body>

                    {/*<Card.Footer>
                        <Button
                        size="sm"
                        variant="danger"
                        onClick={(graph_id, question_id) => this.props.deleteQuestion(this.props.graph.id, this.props.question.id)}
                    >X
                    </Button>
                    </Card.Footer> */}
                </Card>
            )
        /// only render if this hasnt been saved yet
        } else {
            return (
                <Card className="text-center">
                    <Card.Body>
                        <Card.Header> Ask a question. </Card.Header>
                        <Card.Title>
                            {this.props.question.content}
                        </Card.Title>
                    </Card.Body>
                </Card>
            )
        }
    }
}


export default Question