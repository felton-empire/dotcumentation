import { Card, Typography } from "@mui/material";
import InterfaceMethodMeta from "./InterfaceMethodMeta";

export default function InterfaceMethodDetails(props) {
  let interfaceSelected = props.interfaceSelected
  let interfaceMethodSelected = props.interfaceMethodSelected
  let title = ""
  const spaceBelow = { paddingBottom: "10px" }
  if(!interfaceSelected) {
    interfaceSelected = "Select an Interface from the left"
  } else {
    interfaceSelected = props.interfaceSelected
  }
  if (!props.interfaceMethodSelected) {
    interfaceMethodSelected = ""
  } else {
    interfaceMethodSelected = " : " + props.interfaceMethodSelected
  }
  title = interfaceSelected + interfaceMethodSelected

  return(
    <Card
      sx={{
        backgroundColor: "#4d4d4d",
        marginBottom: "10px",
        padding: "8px",
      }}
    >
      <Typography sx={spaceBelow} variant="h4">{title}</Typography>
      {
        (!interfaceMethodSelected && props.interfaceSelected) &&
        <Typography variant="h5">Select a Method from the submenu</Typography>
      }
      {
        interfaceMethodSelected &&
        <InterfaceMethodMeta
          interfaceDetails={props.interfaceDetails}
          interfaceMethodSelected={props.interfaceMethodSelected}
          interfaceCategorySelected={props.interfaceCategorySelected}
        />
      }
    </Card>
  )
}