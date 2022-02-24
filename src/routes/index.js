import React from 'react';

import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Forgot from '../pages/ForgotPassword';
import CreateEvent from '../pages/CreateEvent';
import Event from '../pages/Event';
import HomeOffline from '../pages/HomeOffline';
import Checkout from '../pages/Checkout';
import Ticket from '../pages/Ticket';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import Mytickets from '../pages/ListTickets';

import Route from './route'

export const Routes = () => {
  return (
    <Switch>
        <Route exact path='/' component={ HomeOffline }/>
        <Route exact path='/home' component={ Home } isPrivate/>
        <Route exact path='/event/:id' component={ Event } isPrivate/>
        <Route exact path='/checkout/:id' component={ Checkout } isPrivate/>
        <Route exact path='/purchased/:id' component={ Ticket } isPrivate/>
        <Route exact path='/profile' component={ Profile } isPrivate/>
        <Route exact path='/mytickets' component={ Mytickets } isPrivate/>
        <Route exact path='/create-event' component={ CreateEvent } isPrivate/>
        <Route exact path='/edit-profile' component={ EditProfile } isPrivate/>
        <Route exact path='/login' component={ SignIn }/>
        <Route exact path='/cadastro' component={ SignUp }/>
        <Route exact path='/redefinir' component={ Forgot }/>
    </Switch>
  );
}