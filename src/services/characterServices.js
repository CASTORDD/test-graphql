import { useQuery } from "@apollo/client"
import { ALL_CHARACTERS } from "../queries/ListQuery"

export const CharactersService = (page) => {
  const { loading, error, data,  } = useQuery(
    ALL_CHARACTERS,
    {
      variables: {
        page: parseInt(page)
      },
      notifyOnNetworkStatusChange: true,
    }
  )

  return ({ loading, error, data }) 
}

export default CharactersService