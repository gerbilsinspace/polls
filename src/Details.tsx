import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";

const Details = () => {
  let { id } = useParams();
  const [name, setName] = useState("");

  useEffect(() => {
    const getPoll = async () => {
      const pollQuery = `query poll ($id: ID!) {
        getPoll(
          id: $id
        ) {
          name
        }
      }`;

      const { data } =
        (await API.graphql(graphqlOperation(pollQuery, { id }))) || {};
      const { getPoll } = data || {};

      setName(getPoll.name || "");
    };

    getPoll();
  }, [id]);
  return (
    <div>
      <header className='App-header'>{name}</header>
    </div>
  );
};
export default Details;
