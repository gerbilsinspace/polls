/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreatePollInput = {
  id?: string | null,
  name: string,
};

export type ModelPollConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelPollConditionInput | null > | null,
  or?: Array< ModelPollConditionInput | null > | null,
  not?: ModelPollConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdatePollInput = {
  id: string,
  name?: string | null,
};

export type DeletePollInput = {
  id?: string | null,
};

export type CreateVoteInput = {
  id?: string | null,
  vote: string,
  count: number,
  votePollId?: string | null,
};

export type ModelVoteConditionInput = {
  vote?: ModelStringInput | null,
  count?: ModelIntInput | null,
  and?: Array< ModelVoteConditionInput | null > | null,
  or?: Array< ModelVoteConditionInput | null > | null,
  not?: ModelVoteConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateVoteInput = {
  id: string,
  vote?: string | null,
  count?: number | null,
  votePollId?: string | null,
};

export type DeleteVoteInput = {
  id?: string | null,
};

export type ModelPollFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPollFilterInput | null > | null,
  or?: Array< ModelPollFilterInput | null > | null,
  not?: ModelPollFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelVoteFilterInput = {
  id?: ModelIDInput | null,
  vote?: ModelStringInput | null,
  count?: ModelIntInput | null,
  and?: Array< ModelVoteFilterInput | null > | null,
  or?: Array< ModelVoteFilterInput | null > | null,
  not?: ModelVoteFilterInput | null,
};

export type CreatePollMutationVariables = {
  input: CreatePollInput,
  condition?: ModelPollConditionInput | null,
};

export type CreatePollMutation = {
  createPoll:  {
    __typename: "Poll",
    id: string,
    name: string,
    votes:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        count: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdatePollMutationVariables = {
  input: UpdatePollInput,
  condition?: ModelPollConditionInput | null,
};

export type UpdatePollMutation = {
  updatePoll:  {
    __typename: "Poll",
    id: string,
    name: string,
    votes:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        count: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeletePollMutationVariables = {
  input: DeletePollInput,
  condition?: ModelPollConditionInput | null,
};

export type DeletePollMutation = {
  deletePoll:  {
    __typename: "Poll",
    id: string,
    name: string,
    votes:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        count: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateVoteMutationVariables = {
  input: CreateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type CreateVoteMutation = {
  createVote:  {
    __typename: "Vote",
    id: string,
    vote: string,
    count: number,
    poll:  {
      __typename: "Poll",
      id: string,
      name: string,
      votes:  {
        __typename: "ModelVoteConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateVoteMutationVariables = {
  input: UpdateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type UpdateVoteMutation = {
  updateVote:  {
    __typename: "Vote",
    id: string,
    vote: string,
    count: number,
    poll:  {
      __typename: "Poll",
      id: string,
      name: string,
      votes:  {
        __typename: "ModelVoteConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteVoteMutationVariables = {
  input: DeleteVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type DeleteVoteMutation = {
  deleteVote:  {
    __typename: "Vote",
    id: string,
    vote: string,
    count: number,
    poll:  {
      __typename: "Poll",
      id: string,
      name: string,
      votes:  {
        __typename: "ModelVoteConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetPollQueryVariables = {
  id: string,
};

export type GetPollQuery = {
  getPoll:  {
    __typename: "Poll",
    id: string,
    name: string,
    votes:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        count: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListPollsQueryVariables = {
  filter?: ModelPollFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPollsQuery = {
  listPolls:  {
    __typename: "ModelPollConnection",
    items:  Array< {
      __typename: "Poll",
      id: string,
      name: string,
      votes:  {
        __typename: "ModelVoteConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetVoteQueryVariables = {
  id: string,
};

export type GetVoteQuery = {
  getVote:  {
    __typename: "Vote",
    id: string,
    vote: string,
    count: number,
    poll:  {
      __typename: "Poll",
      id: string,
      name: string,
      votes:  {
        __typename: "ModelVoteConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListVotesQueryVariables = {
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVotesQuery = {
  listVotes:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      id: string,
      vote: string,
      count: number,
      poll:  {
        __typename: "Poll",
        id: string,
        name: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePollSubscription = {
  onCreatePoll:  {
    __typename: "Poll",
    id: string,
    name: string,
    votes:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        count: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdatePollSubscription = {
  onUpdatePoll:  {
    __typename: "Poll",
    id: string,
    name: string,
    votes:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        count: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeletePollSubscription = {
  onDeletePoll:  {
    __typename: "Poll",
    id: string,
    name: string,
    votes:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        count: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateVoteSubscription = {
  onCreateVote:  {
    __typename: "Vote",
    id: string,
    vote: string,
    count: number,
    poll:  {
      __typename: "Poll",
      id: string,
      name: string,
      votes:  {
        __typename: "ModelVoteConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateVoteSubscription = {
  onUpdateVote:  {
    __typename: "Vote",
    id: string,
    vote: string,
    count: number,
    poll:  {
      __typename: "Poll",
      id: string,
      name: string,
      votes:  {
        __typename: "ModelVoteConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteVoteSubscription = {
  onDeleteVote:  {
    __typename: "Vote",
    id: string,
    vote: string,
    count: number,
    poll:  {
      __typename: "Poll",
      id: string,
      name: string,
      votes:  {
        __typename: "ModelVoteConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};
