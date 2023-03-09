import {Typography} from "@mui/material";

export default function FormattedDocumentation(props) {
  return (
    <>
      {
      props.docs.map((value, key) => (
        <Typography
          sx={{whiteSpace: 'pre-line'}}
          key={key}>
            {value}
        </ Typography>
      ))
      }
    </>
  )
}