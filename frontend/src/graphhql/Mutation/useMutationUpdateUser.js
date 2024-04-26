import gql from "graphql-tag";

export const UPDATEUSER = gql`
  mutation updateUser($user: JSON!){
    updateUser(user: $user)
  }
`;