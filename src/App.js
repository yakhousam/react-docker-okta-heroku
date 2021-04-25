import React from 'react';
import { Calendar } from './Calendar';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';

function App() {
  return (
    <Router>
      <Security issuer='https://dev-10419792.okta.com/oauth2/default'
                clientId='0oan96bpfnTrhJj5a5d6'
                redirectUri={window.location.origin + '/callback'}
                pkce={true}>
        <SecureRoute path='/' exact={true} component={Calendar}/>
        <Route path='/callback' component={LoginCallback}/>
      </Security>
    </Router>
  );
}

export default App;
