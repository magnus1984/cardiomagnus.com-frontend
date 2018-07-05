import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { BrowserRouter } from 'react-router-dom'

import { Switch, Route } from 'react-router-dom'
import LocationFinder from './components/LocationFinder'
import PurchaseSelector from './components/PurchaseSelector'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

import Navbar from './components/Navbar'

class App extends Component {

  render() {
    return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Container>
            <Row>
                <Col>
                    <h1 style={{textAlign:'center'}}> Training Programs Designed For Human Machines </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Switch>
                        <Route exact path="/purchase" component={PurchaseSelector} />
                        <Route exact path="/location" component={LocationFinder} />
                    </Switch>
                </Col>
            </Row>
        </Container>
      </div>
    </BrowserRouter>
    )
  }
}

export default App
