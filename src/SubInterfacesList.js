import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Fragment } from "react";
export default function SubInterfacesList(props) {
  function subInterfaceClick(clickedID) {
    const newSubInterfaces = props.topDetails
    Object.entries(props.topDetails).forEach((key, value) => {
      props.setSubInterfaceSelected(clickedID)
      if (key[0] == clickedID) {
        newSubInterfaces[key[0]].selected = true
      } else {
        newSubInterfaces[key[0]].selected = false
      }
    })
    props.setTopDetails(newSubInterfaces)
  }

  return (
    <>
      {
        Object.entries(props.topDetails).map(([key, value]) => (
          <ListItemButton
            key={key}
            onClick={() => subInterfaceClick(key)}
            selected={value["selected"]}
          >
            <ListItem disablePadding>
              <ListItemText
                secondary={key}
                sx={{
                  paddingLeft: 1
                }}
              />
            </ListItem>
          </ListItemButton>
        ))
      }
    </>
  )
}