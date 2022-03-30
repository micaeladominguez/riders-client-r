import {gql} from "@apollo/client";

export const REGISTER_RIDER = gql`
  mutation RegisterRider($name: String!, $surname: String!, $DNI: Int!, $email: String!, $password: String!, $vehicleType: String!) {
    registerRider(input: {
        name: $name,
        surname: $surname,
        DNI: $DNI,
        email: $email,
        password: $password,
        vehicleType: $vehicleType,
        })
        {
            id
            name
            surname
            DNI
            email{
                address
            }
            rating{
                stars
            }
            vehicle{
                type
            }
        }
  }
`;

export const LOGIN_RIDER = gql`
  mutation LoginRider($email: String!, $password: String!) {
    logInRider(input: {
        email: $email,
        password: $password,
        })
        {
            token
        }
  }
`;
export const GET_CALLS = gql `
    query {
      getCall {
        calls
      }
    }
  
`;