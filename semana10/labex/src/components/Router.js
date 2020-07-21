import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from './HomePage'
import ApplicationFormPage from './ApplicationFormPage'
import CreateTripPage from './CreateTripPage'
import ListTripsPage from './ListTripsPage'
import LoginPage from './LoginPage'
import TripDetailsPage from './TripDetailsPage'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/application-form">
          <ApplicationFormPage />
        </Route>
        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/create">
          <CreateTripPage />
        </Route>
        <Route exact path="/trips/details">
          <TripDetailsPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/">
          <div>Opa! 404!</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}