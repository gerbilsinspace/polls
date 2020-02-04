import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { API, graphqlOperation } from "aws-amplify";
import Header from "./Header";

const createVoteMutation = `mutation createVote($vote: String!, $count: Int!, $votePollId: ID!) {
    createVote(input: {
      vote: $vote,
      votePollId: $votePollId,
      count: $count
    }) {
      id
      vote
      count
      poll {
        id
        name
      }
    }
}`;

const AddVote = () => {
  const { id } = useParams();
  const [submitted, setSubmitted] = useState(false);

  const validate = (values: any) => {
    const errors = {
      vote: "",
      user: ""
    };

    if (!values.vote) {
      errors.vote = "Required";
    }

    if (errors.vote.length === 0) {
      delete errors.vote;
    }

    return errors;
  };

  const onSubmit = async (
    values: any,
    { setSubmitting }: { setSubmitting: Function }
  ) => {
    const result = { ...values, votePollId: id, count: 0 };
    await API.graphql(graphqlOperation(createVoteMutation, result));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return <Redirect to={`/details/${id}`} />;
  }

  return (
    <div>
      <Header />
      <header className='App-header'>
        <h1>Add Vote</h1>

        <Formik
          initialValues={{ vote: "", user: "" }}
          validate={validate}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='form-field'>
                <label htmlFor='vote'>Vote: </label>
                <Field type='text' name='vote' id='vote' />
                <ErrorMessage name='vote' component='div' />
              </div>

              <div className='form-field'>
                <button type='submit' disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </header>
    </div>
  );
};

export default AddVote;
