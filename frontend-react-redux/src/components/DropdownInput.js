// bring in built in methods
import React, { Component } from 'react'

// import actions not all created yet psuedocode
import { fetchGraphData, fetchNotes, fetchQuestions } from '../actions/fetchGraphdata'
import { deleteGraph } from '../actions/deleteGraph'


// bootstrap styling import
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { connect } from 'react-redux'


class DropdownInput extends Component {
    //initial state placeholders for form values of selected graph and array of all data graphs grabbed from database.
    // array of loaded graphs to dashboard

        state ={
            graph_url: "",
            graphs: [],
            loadedGraphs: []
        }

        // during page load fetch request is grabbing all graphs in database and adding them to graph array
        componentDidMount(){
            
            fetch("https://parser-backend-api.herokuapp.com/graphs")
            .then(response => response.json())
            .then(graphs => {
                
                this.setState({graphs})
            })
            
        }



        // local state changes upon user interaction
        handleDropdownChange =(event) => {
            this.setState({graph_url: event.target.value})
        }


        handleDropdownSubmit = (event) => {
            event.preventDefault()

            
            if (this.graph_url !== "") {
                this.props.fetchGraphData(this.state.graph_url)
                this.props.fetchNotes(this.state.graph_url)
                this.props.fetchQuestions(this.state.graph_url)

                // changing state to remove already added graphs to dashboard
                this.setState({
                    graphs: this.state.graphs.filter(graph => this.state.graph_url !== `https://parser-backend-api.herokuapp.com/graphs/${graph.id}`),
                    loadedGraphs: this.state.graphs.filter(graph => this.state.graph_url === `https://parser-backend-api.herokuapp.com/graphs/${graph.id}`)
                })
            } else {
                return "Choose your data source to add to dashboard for comparison"
            }
            
        }


        // Handle clearing the dashboard from local state.loadedGraphs
        handleDelete = () => {
            this.props.graphs.map(graph => this.props.deleteGraph(graph))
        // render all local state as graph options in dropdown
        this.setState ({
            graphs: [...this.state.graphs.concat(this.props.graphs)],
            loadedGraphs: []
        })
    }

    // render buttons for dropdoqwn,load graph, clear dashboard
    render() {

        return (
            <Form onSubmit={event => this.handleDropdownSubmit(event)}>
                <Form.Group>
                    <Form.Control as="select" size="lg" value={this.state.graph_url} onChange={event => this.handleDropdownChange(event)}>
                        {/* options dynamically populated by iteration of this.state.graphs */}
                        <option value="" >Choose a Graph to load to the dashboard</option>
                        {this.state.graphs.map(graph => <option value={`https://parser-backend-api.herokuapp.com/graphs/${graph.id}`} key={graph.id}>{graph.name}</option>)}
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Button type="submit"> Load Graph</Button>


                    <Button variant="danger"
                        onClick={this.handleDelete}>
                        Clear Data
                    </Button>
                </Form.Group>
            </Form>
            
        )
    }
}


// graphs in store can be accessed by this.props.graphs
const mapStatetoProps = (state) => {
    return {
        graphs: state.graphs
    }
}


// all actions added to dispatch
export default connect (mapStatetoProps, { fetchGraphData, fetchNotes, fetchQuestions, deleteGraph}) (DropdownInput)