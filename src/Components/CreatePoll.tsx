import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Redirect } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Header from "./Header";

const createPollMutation = `mutation createPoll($name: String!) {
  createPoll(input: {
    name:$name
  }) {
    id
    name
  }
}`;

const CreatePoll = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <Redirect to='/' />;
  }

  const onSubmit = async (
    values: any,
    { setSubmitting }: { setSubmitting: Function }
  ) => {
    await API.graphql(graphqlOperation(createPollMutation, values));
    setSubmitting(false);
    setSubmitted(true);
  };

  const validate = (values: any) => {
    const errors = {
      name: ""
    };

    if (!values.name) {
      errors.name = "Required";
    }

    if (errors.name.length === 0) {
      delete errors.name;
    }

    return errors;
  };

  return (
    <div className='App'>
      <Header />
      <header className='App-header'>
        <h1>Create Poll</h1>
      </header>

      <Formik
        initialValues={{ name: "" }}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='form-field'>
              <label htmlFor='name'>Name: </label>
              <Field type='text' name='name' placeholder='Name' id='name' />
              <ErrorMessage name='name' component='div' />
            </div>

            <div className='form-field'>
              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreatePoll;
