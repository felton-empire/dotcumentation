import CircularProgress from "@mui/material/CircularProgress";
import { ListItemText, ListItem, ListItemButton, Box } from "@mui/material";

export default function Interfaces(props) {

  function constantClick(clickedID) {
    const newInterfaces = props.interfaces.map((value, key) => {
      if (value.selected === true) {
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
      Object.entries(props.interfaces).map(([key, value]) => (
        <ListItemButton
          key={key.toString()}
          onClick={() => constantClick(key)}
          selected={value.selected}>
          <ListItem key={key.toString()} disablePadding>
            <ListItemText primary={value.name}/>
          </ListItem>
        </ListItemButton>
      ))
    )
  }
}

