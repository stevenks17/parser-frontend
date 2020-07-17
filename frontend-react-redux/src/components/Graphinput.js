import React, { Component } from 'react'

// import actions future?
import { addNote } from '../actions/addSpeculations'
import { addQuestion} from '../actions/addSpeculations'

// browser url routing render component as needed
import { NavLink  } from 'react-router-dom'


// import local components
import Note from '../components/Note'
import Question from '../components/Question'

// bootstrap styling
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

// allows access to redux store this is a stateful component
import { connect } from 'react-redux'

class GraphInput extends Component {
// initial state placejolders 
    state ={
        note: {
            content: ""
        },
        question: {
            content: ""
        },
        visible: false,
        view: false
        }
        // state will be updated everytime the form value changes
        handleChange = (event) => {
            this.setState({
                [event.target.name]: {content: event.target.value, graph_id: this.props.graph_id}
            })
        }
        // visible key will show as true to confirm before calling fetch.
        handleSubmit = (event) => {
            event.preventDefault()
            this.setState({visible: true})
        }

        handleSave = () => {
            this.props.addNote(this.state.note)
            this.props.addQuestion(this.state.question)
            this.setState({
                note: {content: ""},
                question: {content: ""},
                visible: false,
                view: true
            })

        }

        // if user cancels submission, state should reset to initial values
        handleCancel = () => {
            this.setState({
                note: {content: ""},
                question: {content: ""},
                visible: false,
                view: false
            })
        }

        render () {
            // Need to check current state to base what return should be used for what user interaction has done.
            /*const validated= this.state.note.content.length > 20 && this.state.note.content.length > 20*/
        
            if (this.state.visible === false && this.state.view === false){
                /// render form and graph
                return (
                    <div>
                            <h3> Add your Observations or Speculation below. </h3>

                        <Form onSubmit={event => this.handleSubmit(event)} >
                            <Form.Group>
                                <Form.Control size="lg" type="text" name="note" placeholder="Make an observation." value={this.state.note.content} onChange={event => this.handleChange(event)} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control size="lg" type="text" name="question" placeholder="Ask a question" value={this.state.question.content} onChange={event => this.handleChange(event)} />
                            </Form.Group>

                            <Button  type="submit" >Add</Button>
                        </Form>
                    </div>

                )
            } else if (this.state.visible === true && this.state.view === false) {
                /// rwendering draft to confirm submission
                return (
                    <div>
                        <Note note={this.state.note} />
                        <Question question={this.state.question} />
                        <Button type="submit" onClick={this.handleSave}> Save Speculation to Database</Button>
                        <Button type="submit" variant="danger" onClick={this.handleCancel}>Cancel</Button>
                    </div>
                )
            } else if (this.state.view === true) {
                // after saving, user can now navigate to view all 
                return (
                    <NavLink
                        style={{ marginRight: '10px'}, {backgroundColor: 'transparent'}}
                        redirect to={`/graphs/${this.props.graph_id}/speculations`}
                        graph={this.props.graph}>
                        <Button size="lg" block>View All Speculation for This Graph</Button>
                    </NavLink>
                )
        }
            
    }
}


// only state needed is graph speculations  for specific graph
const mapStateToProps = (state) => {
    return {
        graph: state.graph
    }
}

// Dispatch to props for Notes and Questions
export default connect(mapStateToProps, {addNote, addQuestion})(GraphInput)
