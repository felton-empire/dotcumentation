import { ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function SubInterfacesList(props) {
  return (
    <>
      {
        Object.entries(props.subInterfaces).map(([key, value]) => (
          <ListItemButton
            key={key.toString()}>
            <ListItem key={key.toString()} disablePadding>
              <ListItemText
                secondary={key.toString()}
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