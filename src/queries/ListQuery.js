import { gql } from '@apollo/client'

export const ALL_CHARACTERS = gql`
  query allCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`