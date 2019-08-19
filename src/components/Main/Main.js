import React from 'react'
import { Switch, Route } from "react-router-dom"
import { PersonnelList } from '../Personnel'
import Container from "react-bootstrap/Container";

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path="/" component={PersonnelList} />
      </Switch>
    </Container>
  </main>
);

export default Main