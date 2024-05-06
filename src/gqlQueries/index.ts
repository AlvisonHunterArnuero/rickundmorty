import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query {
  characters {
    results {
      name
      id
      image
      status
      created
      origin {
        name
      }
      gender
      species
      episode {
        id
        name
        air_date
        episode
        created
        characters {
          name
          image
          id
        }
      }
      location {
        name
        dimension
      }
    }
  }
}
`;
