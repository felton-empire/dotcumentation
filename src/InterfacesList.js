import CircularProgress from "@mui/material/CircularProgress";
import { List, ListItemText, ListItem } from "@mui/material"
import { ListItemButton, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SubInterfacesList from "./SubInterfacesList";
import { Fragment } from "react";

export default function InterfacesList(props) {

  function constantClick(clickedID) {
    const newInterfaces = props.interfaces.map((value, key) => {
      if (value.selected === true) {
        if (key === Number(clickedID)) {
          // Clicked the opened interface a second time. Close it
          value.selected = false
          props.setInterfaceTopSelected()
          return value
        }
        // Resetting old selected value
        value.selected = false
      }
      if (key === Number(clickedID)) {
        value.selected = true
        props.setInterfaceTopSelected(value.name)
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
                onClick={() => constantClick(key)}
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
                <SubInterfacesList
                  topDetails={props.topDetails}
                  setTopDetails={props.setTopDetails}
                  setSubInterfaceSelected={props.setSubInterfaceSelected}
                />
              }
            </Fragment>
          ))
        }
      </List>
    )
  }
}