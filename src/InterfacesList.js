import { Fragment } from "react";
import { List, ListItemText, ListItem, CircularProgress } from "@mui/material"
import { ListItemButton, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InterfaceMethodsList from "./InterfaceMethodsList";

export default function InterfacesList(props) {

  function interfaceClick(clickedID) {
    const newInterfaces = props.interfaces.map((value, key) => {
      if (value.selected === true) {
        if (key === Number(clickedID)) {
          // Clicked the opened interface a second time. Close it
          value.selected = false
          props.setInterfaceSelected()
          return value
        }
        // Resetting old selected value
        value.selected = false
      }
      if (key === Number(clickedID)) {
        value.selected = true
        props.setInterfaceSelected(value.name)
        return value
      } else {
        return value
      }
    })
    props.setInterfaces(newInterfaces)
  }

  if ( props.interfaces === "loading" ) {
    return <Box><CircularProgress /></Box>
  } else {
    return (
      <List>
        {
          Object.entries(props.interfaces).map(([key, value]) => (
            <Fragment key={value.name}>
              <ListItemButton
                onClick={() => interfaceClick(key)}
                selected={value.selected}
              >
                <ListItem disablePadding>
                  <ListItemText primary={value.name}/> {
                    value.selected ?
                      <KeyboardArrowDownIcon /> :
                      <KeyboardArrowRightIcon />
                  }
                </ListItem>
              </ListItemButton>
              { value.selected &&
                <InterfaceMethodsList
                  interfaceDetails={props.interfaceDetails}
                  setInterfaceDetails={props.setInterfaceDetails}
                  setInterfaceSelected={props.setInterfaceSelected}
                  setInterfaceMethod={props.setInterfaceMethod}
                />
              }
            </Fragment>
          ))
        }
      </List>
    )
  }
}