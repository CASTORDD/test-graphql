import { Link } from "next/link"
import { Alert, AlertTitle, Stack } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"

const AlertCard = ({ text, url }) => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Alert severity="error" action={
        <Link href={url}>
          <IconButton
          aria-label="close"
          color=""
          size="small"
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
        </Link>
      }>
        <AlertTitle>Error</AlertTitle>
        {text}
      </Alert>
    </Stack>
  )
}

export default AlertCard