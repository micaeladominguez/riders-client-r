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
export const FINISH_RIDE = gql`
  mutation FinishRide($callerDNI:Int! ) {
    finishRide(input: {
        callerDNI: $callerDNI
    }){
            id
           riderArrivedStartLocation
           date
           active
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
export const UPDATE_RIDER_FIRST_LOCATION = gql`
  mutation UpdateRiderArrivedFirstLocation {
    updateRiderArrivedFirstLocation
       {
            id
           riderArrivedStartLocation
           date
           active
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
            active,
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

export const GET_RIDER_STATUS = gql`
   query GetRiderStatus {
    getRiderRideStatus {
        inRide,
    }
  }
`;

export const RATE_CALLER = gql`
  mutation RateCaller($rideId: String!, $stars: Int!) {
    rateCaller(input: {
        rideId: $rideId,
        stars: $stars,
        })
  }
`;