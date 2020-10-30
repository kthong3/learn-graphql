import { gql } from '@apollo/client';

const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      name
      id
    }
  }
`

const GET_BOOKS = gql`
  query GetBooks {
    books {
      name
      id
    }
  }
`

export { GET_BOOKS, GET_AUTHORS };
