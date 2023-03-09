import { Card, Typography } from "@mui/material";

export default function FieldArgCards(props) {
  return (
    props.fields.map((field, key) => (
      <Card
        key={key+1}
        sx={{
          padding: "8px",
          margin: "8px",
          backgroundColor: "#5e5e5e"
        }}
      >
        <Typography># {key + 1}</Typography>
        <Typography>Name: { field.name.toString() }</Typography>
        <Typography>Type: { field.typeName.toString() }</Typography>
        { !field.docs.isEmpty &&
          <Typography>Documentation: { field.docs.toString() }</Typography>
        }
      </Card>
    ))
  )
}