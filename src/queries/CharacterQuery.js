import { gql } from '@apollo/client'

export const CHARACTER = gql`
  query Character ($ID: ID!) {
    character(id: $ID){
      name
      status
      species
      type
      gender
      origin {
        id
        name
      }
      location {
        name
      }
      image
      episode{
        name
        episode
      }
      created
    }
  }
`