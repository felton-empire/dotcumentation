import {Typography} from "@mui/material";

export default function InterfaceMethod(props) {
  return (
    <Typography paragraph>
      {
        props.interfaceSelected + ": " +
        JSON.stringify(props.interfaceMethod)
      }
    </Typography>
  )
}