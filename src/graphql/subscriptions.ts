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
          vote
          count
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
          vote
          count
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
          vote
          count
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
      vote
      count
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
      vote
      count
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
      vote
      count
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
