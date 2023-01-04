import Link from "next/link"
import { 
  Button,
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Typography 
} from "@mui/material"

const CardList = (data) => {
  const { id, image, name } = data.data
  
  return (
    <Card>
      <CardMedia sx={{ height: 160 }} image={image} title={name} />
      <CardContent>
        <Typography 
          gutterBottom 
          variant="h4" 
          component="h4" 
          style={{fontSize: 18, textAlign: "center"}}
        >
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Link 
          href={`/character/${id}`} 
          style={{ textDecoration: "none", margin: "0 auto"}}
        >
          <Button variant="contained" color="primary">Ver mais...</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default CardList