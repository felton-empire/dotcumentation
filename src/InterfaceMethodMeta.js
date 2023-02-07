import {Card, Typography} from "@mui/material";

export default function InterfaceMethodMeta(props) {
  const metadata = props.interfaceDetails[props.interfaceMethodSelected].meta
  let docs = ""
  let args = false

  for (const [key, value] of metadata.entries()) {
    switch(key) {
      case "docs":
        docs = value.toHuman()
        break
      case "args":
        args = value
    }
  }

  return(
    <>
      {
        docs.map((value, key) => (
          <Typography sx={{ whiteSpace: 'pre-line'}} key={key}>{value}</ Typography>
        ))
      }
      {
        args &&
        <Typography sx={{paddingTop: "20px"}} variant="h5">Arguments</Typography>
      }
      {
        args &&
          args.map((arg, key) => (
            <Card
              key={arg.name}
              sx={{
                padding: "8px",
                margin: "8px",
                backgroundColor: "#5e5e5e"
              }}
            >
              <Typography variant="h6"># {key+1}</Typography>
              <Typography>Name: {arg.name}</Typography>
              <Typography>Type: {arg.type}</Typography>
              <Typography>TypeName: {arg.typeName.toString()}</Typography>
            </Card>
          ))
      }
    </>
  )
}