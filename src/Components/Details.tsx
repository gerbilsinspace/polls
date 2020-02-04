import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import Header from "./Header";

interface Vote {
  id: string;
  vote: string;
  count: number;
}

interface Poll {
  id: string;
  name: string;
}

const Details = () => {
  let { id } = useParams();
  const [name, setName] = useState("");
  const [votes, setVotes] = useState([]);
  const [voteChangeCount, setVoteChangeCount] = useState(0);

  useEffect(() => {
    const getPoll = async () => {
      const pollQuery = `query poll ($id: ID!) {
        getPoll(
          id: $id
        ) {
          name
          votes {
            items {
              vote
              id
              count
            }
          }
        }
      }`;

      const { data } =
        (await API.graphql(graphqlOperation(pollQuery, { id }))) || {};
      const { getPoll } = data || {};
      const pollName = getPoll.name || "";
      const pollVotes = getPoll.votes || {};
      const { items } = pollVotes || [];

      setName(pollName);
      setVotes(items);
    };

    getPoll();
  }, [id]);

  useEffect(() => {
    const watchForNewPolls = async () => {
      const updatePollSubscription = `subscription addPollSubscription {
        onCreatePoll {
          id
          name
        }
      }`;

      const subscription = API.graphql(
        graphqlOperation(updatePollSubscription)
      ).subscribe({
        next: (data: { value: { data: { onUpdatePoll: Poll } } }) => {
          const { value } = data || {};
          const pollData = value.data || {};
          const { onUpdatePoll } = pollData || {};

          console.log(onUpdatePoll);
        }
      });

      return () => {
        subscription.unsubscribe();
      };
    };

    watchForNewPolls();
  }, []);

  const onCastVoteClick = async (voteId: string, count: number) => {
    const updateVoteCountMutation = `mutation updateVote ($id: ID!, $count: Int!) {
      updateVote(
        input: {
          id: $id,
          count: $count
        }
      ) {
        id
        count
        vote
      }
    }`;

    await API.graphql(
      graphqlOperation(updateVoteCountMutation, {
        id: voteId,
        count: count + 1
      })
    );
    setVoteChangeCount(voteChangeCount + 1);
  };

  return (
    <div>
      <Header />
      <header className='App-header'>
        <h1>{name}</h1>
      </header>

      <div className='container'>
        <h2>Votes</h2>
        <Link to={`/details/${id}/add-vote`}>Add Voting Option</Link>
        <ul>
          {votes.map((vote: Vote) => (
            <li key={vote.id} className='vote-item'>
              {vote.vote}: {vote.count}
              <button
                onClick={() => {
                  onCastVoteClick(vote.id, vote.count);
                }}
                className='vote-item-button'
              >
                Cast Vote
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Details;
