import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import Header from "./Header";

interface Poll {
  id: string;
  name: string;
}

const Polls = () => {
  const [polls, setPolls] = useState([]);
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    const getPolls = async () => {
      const listPollsQuery = `query listPolls {
        listPolls {
          items {
            id
            name
          }
        }
      }`;

      const allPolls = await API.graphql(graphqlOperation(listPollsQuery));
      const { data } = allPolls || {};
      const { listPolls } = data || {};
      const { items } = listPolls || {};

      setPolls(items);
    };

    getPolls();
  }, [updateCount]);

  useEffect(() => {
    const watchForNewPolls = async () => {
      const addPollSubscription = `subscription addPollSubscription {
        onCreatePoll {
          id
          name
        }
      }`;

      const newPoll = await API.graphql(graphqlOperation(addPollSubscription));
      console.log("setup watching for new poll", newPoll);
    };

    watchForNewPolls();
  }, [updateCount]);

  return (
    <div>
      <Header />
      <header className='App-header'>
        <h1>
          Polls{" "}
          <small>
            <Link to='/create'>Create Poll</Link>
          </small>
        </h1>
      </header>

      {polls.map((poll: Poll, index) => (
        <div className='poll' key={poll.id}>
          <Link to={`/details/${poll.id}`}>
            {index + 1}: {poll.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Polls;
