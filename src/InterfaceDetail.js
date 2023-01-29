import {Typography} from "@mui/material";

export default function InterfaceDetail(props) {
  return (
    <Typography paragraph>
      {JSON.stringify(props.topDetails)}
    </Typography>
  )
}