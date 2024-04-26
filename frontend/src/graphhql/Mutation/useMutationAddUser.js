import gql from "graphql-tag";

export const ADDUSER = gql`
  mutation addUser($user: JSON!){
    addUser(user: $user)
  }
`;