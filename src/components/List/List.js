import { useState } from "react"
import {
  Grid, Typography 
} from "@mui/material"
import CardList from "../CardList"

import CharactersService from "../../services/characterServices"

const List = () => {
  const [page, setPage] = useState(1)

  const { loading, error, data  } = CharactersService(page)

  const { results } = !loading && !error && data?.characters
  
  return (
    <>
      <Typography component="h1" style={{ fontSize: 24, padding: "16px 0", fontWeight: 700}}>Lista de Presonagens</Typography>
      <Grid container spacing={4} style={{ padding: "40px 0"}}>
        {!loading && results.map((item) => {
          return (
            <Grid item xs={12} md={3} key={item.id} >
              <CardList data={item} />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default List