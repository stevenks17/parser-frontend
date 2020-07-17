// this helps pull in the built-in methods for components that React has *important this is where you can get lifecycle methods from.
import React, { Component } from 'react'


import Graph from '../components/Graph'
import GraphInput from '../components/Graphinput'

import { NavLink } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { connect } from 'react-redux'

class New extends Component {

    render() {

        const graph = this.props.graph.find(graph => {return graph.id === parseInt(this.props.match.params.id)})

        if (graph) {
            return (
                <div>
                    <Row>
                        <Col>
                            <Card>
                                <GraphInput graph_id={graph.id} />
                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                <Graph graph={graph}/>
                            </Card>
                        </Col>

                    </Row>
                </div>
            )
        
        } else {
            return (
                <div>
                    <NavLink
                    style={{ marginRight: '10px'}}
                    to="/">
                        <Button variant="dark" size="lg" block>Add data to the Dashboard to get started</Button>
                    </NavLink>

                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        graph: state.graphs
    }
}

export default connect (mapStateToProps)(New)