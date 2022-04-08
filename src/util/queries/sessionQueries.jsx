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
export const ACCEPT_CALL = gql`
  mutation AcceptRider($callId: String!) {
    acceptCall(input: {
        callId: $callId
        })
        {
           id
           riderArrivedStartLocation
           date
            call {
               id
                callerRatingStars
            requestedVehicles{
                bicycle
                motorcycle
                car
                van
            }
            priceInCents
            description
            startLocation{
                address
                lat
                long
            }
            finishLocation{
                address
                lat
                long
            }
            }
        }
  }
`;
export const GET_CALLS = gql`
   query GetCalls($lat: Float!, $long: Float!) {
    getAvailableCalls(input: {
        lat: $lat,
        long: $long,
        })
        {
             id
            callerRatingStars
            requestedVehicles{
                bicycle
                motorcycle
                car
                van
      }
            priceInCents
            date
            description
            startLocation{
               address
               lat
               long
            }
           finishLocation{
            address
            lat
            long
            }
        }
  }
`;
export const GET_RIDER = gql`
   query GetRider {
    getRider {
             id
             name
             surname
             DNI
             email{
                address
             }
            vehicle{
              type
            }
            rating {
                stars
            }
        }
  }
`;
export const GET_ACTIVE_RIDE = gql`
   query GetActualRide {
    getActiveRide {
            id,
            call{
                 id,
                 callerRatingStars,
                 requestedVehicles{
                    bicycle,
                    motorcycle,
                    car,
                    van,
                 },
                priceInCents,
                description,
                startLocation{
                    address,
                    lat,
                    long
                },
                finishLocation {
                    address,
                    lat,
                    long
                }
            },
            riderArrivedStartLocation,
            date,
    }
  }
`;