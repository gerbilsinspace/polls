// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreatePoll = /* GraphQL */ `
  subscription OnCreatePoll {
    onCreatePoll {
      id
      name
      votes {
        items {
          id
          user
          vote
        }
        nextToken
      }
    }
  }
`;
export const onUpdatePoll = /* GraphQL */ `
  subscription OnUpdatePoll {
    onUpdatePoll {
      id
      name
      votes {
        items {
          id
          user
          vote
        }
        nextToken
      }
    }
  }
`;
export const onDeletePoll = /* GraphQL */ `
  subscription OnDeletePoll {
    onDeletePoll {
      id
      name
      votes {
        items {
          id
          user
          vote
        }
        nextToken
      }
    }
  }
`;
export const onCreateVote = /* GraphQL */ `
  subscription OnCreateVote {
    onCreateVote {
      id
      user
      vote
      poll {
        id
        name
        votes {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateVote = /* GraphQL */ `
  subscription OnUpdateVote {
    onUpdateVote {
      id
      user
      vote
      poll {
        id
        name
        votes {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteVote = /* GraphQL */ `
  subscription OnDeleteVote {
    onDeleteVote {
      id
      user
      vote
      poll {
        id
        name
        votes {
          nextToken
        }
      }
    }
  }
`;
