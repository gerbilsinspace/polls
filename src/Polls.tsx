import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";

interface Props {
  signedIn: boolean;
}

interface Poll {
  id: string;
  name: string;
}

const Polls = ({ signedIn }: Props) => {
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
      }`;

      const allPolls = await API.graphql(graphqlOperation(listPollsQuery));
      const { data } = allPolls || {};
      const { listPolls } = data || {};
      const { items } = listPolls || {};

      setPolls(items);
    };

    getPolls();
  }, []);

  return (
    <div>
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
