// built-in(lifecycle) methods imported here
import React, { Component } from 'react'

// import components from local 
import Graph from '../components/Graph'
import Notes from '../components/Notes'
import Questions from '../components/Questions'

//imbrl allows us to enable routing by updating url and rendering needed component listed in routeer
import { NavLink } from 'react-router-dom'

//bootstrap WIP
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

// access state from redux store
import { connect } from 'react-redux'

class Show extends Component {

    render() {
        console.log(this)
    // variables for objects
    const graph = this.props.graphs.find(graph => { return graph.id === parseInt(this.props.match.params.id)})
    const notes = this.props.notes.filter(note => note.graph_id === graph.id)
    const questions = this.props.questions.filter(question => question.graph_id === graph.id)


    // if graph exists it loads all corresponding notes and questions with it
    if (graph) {

        return (
            <Row>
                <Col md={3}>
                    <Notes graph={graph} notes={notes} />
                </Col>

                <Col md={6} >
                    <Card>
                        <Graph graph={graph}/>
                    </Card>

                    <NavLink
                    to={`/graphs/${graph.id}/interact`}>
                        <Button>Interact</Button>
                    </NavLink>
                </Col>


                <Col md={3}>
                    <Questions graph={graph} questions={questions} />
                </Col>
            </Row>
        )
    } else {
        return (
            <div>
                <NavLink
                style={{marginRight: '10px'}}
                to="/">
                <Button variant="dark" size="lg" block>Add Data to get started</Button>
                </NavLink>
            </div>
         )
        }
    }
}


// this will need access to the objects
const mapStateToProps = state => {
    return {
        graphs: state.graphs,
        notes: state.notes,
        questions: state.questions
    }
}


export default connect (mapStateToProps)(Show)
