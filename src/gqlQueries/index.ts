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
          type
        }
        gender
        species
        episode {
          name
          air_date
          id
        }
        location {
          name
          dimension
        }
      }
    }
  }
`;
