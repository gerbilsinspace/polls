import React, { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from 'aws-amplify-react';
import './App.css';

Amplify.configure(awsconfig);

interface Props {
  authState: string;
}

interface Poll {
  id: string,
  name: string,
}

const signUpConfig = {
  header: 'Polls',
  defaultCountryCode: '44',
  hiddenDefaults: ['phone_number'],
};



const addPoll = `mutation createPoll($name: String!) {
  createPoll(input: {
    name:$name
  }) {
    id
    name
  }
}`

const App = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [updatePollCount, setUpdatePollCount] = useState(0);
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const getPolls = async () => {
      const listPollsQuery = `query listPolls {
        listPolls {
          items {
            id
            name
          }
        }
      }`

      const allPolls = await API.graphql(graphqlOperation(listPollsQuery));
      const { data } = allPolls || {};
      const { listPolls } = data || {};
      const { items } = listPolls || {};
      setPolls(items);
    };

    getPolls();
  }, [updatePollCount]);

  const handleAuthStateChange = (authState: string) => {
    setSignedIn(authState === 'signedIn');
  };

  const pollMutation = async () => {
    const pollDetails = {
      name: 'Testing the poll'
    }

    await API.graphql(graphqlOperation(addPoll, pollDetails));
    setUpdatePollCount(updatePollCount + 1);
  }

  return (
    <div className="App">
      <Authenticator
        signUpConfig={signUpConfig}
        onStateChange={handleAuthStateChange}
      />

      <header className="App-header">
        <h1>Polls</h1>

        <button onClick={pollMutation}>Create Test Poll</button>
      </header>

      { polls.map((poll: Poll, index) => (
        <div className="poll" key={poll.id}>{index + 1}: {poll.name}</div>
      ))}
    </div>
  );
}

export default App;
