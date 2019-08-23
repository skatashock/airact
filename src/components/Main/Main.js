import React from 'react'
import { Switch, Route } from "react-router-dom"
import { PersonnelList, PersonnelView } from '../Personnel'
import Container from "react-bootstrap/Container"
import PrivateRoute from '../../utilities/PrivateRoute'

const Main = () => (
  <main>
    <Container>
      <Switch>
        <PrivateRoute exact path="/" component={PersonnelList} />
        <PrivateRoute path="/personnel/list" component={PersonnelList} />
        <PrivateRoute path="/personnel/view/:id" component={PersonnelView} />
      </Switch>
    </Container>
  </main>
);

export default Main