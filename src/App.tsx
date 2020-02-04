import React, { useState } from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { Authenticator } from "aws-amplify-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Polls from "./Polls";
import CreatePoll from "./CreatePoll";
import Details from "./Details";
import "./App.css";

Amplify.configure(awsconfig);

interface Props {
  authState: string;
}

const signUpConfig = {
  header: "Polls",
  defaultCountryCode: "44",
  hiddenDefaults: ["phone_number"]
};

const App = () => {
  const [signedIn, setSignedIn] = useState(false);

  const handleAuthStateChange = (authState: string) => {
    setSignedIn(authState === "signedIn");
  };

  return (
    <Router>
      <div className='App'>
        <Authenticator
          signUpConfig={signUpConfig}
          onStateChange={handleAuthStateChange}
        />
        <Switch>
          <Route path='/' exact>
            <Polls signedIn={signedIn} />
          </Route>
          <Route path='/create' exact>
            <CreatePoll />
          </Route>
          <Route path='/details/:id'>
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
