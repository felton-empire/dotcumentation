import { ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function InterfaceMethodsList(props) {
  function interfaceMethodClick(clickedID) {
    const newInterfaces = props.interfaceDetails
    Object.entries(props.interfaceDetails).forEach((value) => {
      if (value[0] === clickedID) {
        newInterfaces[value[0]].selected = true
        props.setInterfaceMethodSelected(value[0])
      } else {
        newInterfaces[value[0]].selected = false
      }
    })
    props.setInterfaceDetails({...newInterfaces})
  }

  return (
    <>
      {
        Object.entries(props.interfaceDetails).map(([key, value]) => (
          <ListItemButton
            key={key}
            onClick={() => interfaceMethodClick(key)}
            selected={value.selected}
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