import { useRouter } from "next/router"
import Link from "next/link"
import {
  Card, 
  CardContent, 
  CardMedia, 
  CircularProgress, 
  Container, 
  Grid,
  IconButton,
  List, 
  ListItem, 
  ListItemText,
  Typography
} from "@mui/material"
import AlertCard from "../../../components/AlertCard"

import { useQuery } from "@apollo/client"

import { CHARACTER } from "../../../queries/CharacterQuery"
import { ArrowBack } from "@mui/icons-material"

const Character = () => {
  const router = useRouter()
  const id = router.query.id

  const {loading, error, data } = useQuery(
    CHARACTER,
    {
      variables: {
        ID: id
      },
      notifyOnNetworkStatusChange: true,
    }
  )
  
  const { 
    episode, 
    gender, 
    image, 
    location, 
    name, 
    origin, 
    species, 
    status, 
    type 
  } = !loading && !error && data?.character

  return (
    <Container >
      <Grid container style={{ alignItems: "flex-start", padding: "40px 0"}}>
        <Link href="/">
          <IconButton color="primary" aria-label="upload picture" component="label">
            <ArrowBack />
          </IconButton>
        </Link>
        {loading && <CircularProgress />}
        
        {error && (
          <AlertCard 
            text="This is an error alert — check it out!"
            url="/"
          />
        )}

        {!loading && !error && (
          <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
            <CardMedia component="img" heigth="140" image={image} alt={name} />
            <CardContent>
              <Typography gutterBottom component="h3">{name}</Typography>
              <List style={{ padding: "0 0 20px 0"}}>
                <ListItem divider>
                  <ListItemText
                    primary={species}
                    secondary="Species"
                  />
                  <ListItemText
                    primary={status}
                    secondary="Status"
                  />
                </ListItem>
                <ListItem divider>    
                  <ListItemText
                    primary={gender}
                    secondary="GenGenderero"
                  />
                  <ListItemText
                    primary={type ? type : "..."}
                    secondary="Type"
                  />
                </ListItem>
                <ListItem divider>
                  <ListItemText
                    primary={location?.name}
                    secondary="Location"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={origin?.name}
                    secondary="Origin"
                  />
                </ListItem>
              </List>
              <Typography gutterBottom component="h3">Episode</Typography>
              <List>
              {episode?.length > 0 && episode.map((item, index) => {
                  return (
                    <ListItem divider key={index}>
                      <ListItemText
                        primary={item.name}
                        secondary={item.episode}
                      />
                    </ListItem>
                  )
                })}
              </List>
            </CardContent>
          </Card>
        )}
      </Grid>
    </Container>
  )
}

export default Character