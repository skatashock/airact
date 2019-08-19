import React from 'react'
import { Switch, Route } from "react-router-dom"
import { PersonnelList, PersonnelView } from '../Personnel'
import Container from "react-bootstrap/Container";

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path="/" component={PersonnelList} />
        <Route path="/personnel/list" component={PersonnelList} />
        <Route path="/personnel/view/:id" component={PersonnelView} />
      </Switch>
    </Container>
  </main>
);

export default Main