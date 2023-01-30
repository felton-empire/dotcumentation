import {Typography} from "@mui/material";

export default function InterfaceDetail(props) {
  return (
    <Typography paragraph>
      {
        props.subInterfaceSelected + ": " +
        JSON.stringify(props.topDetails[props.subInterfaceSelected])
      }
    </Typography>
  )
}