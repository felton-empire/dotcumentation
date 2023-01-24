import { Drawer, List, Toolbar, Box } from "@mui/material";
import Interfaces from "./Interfaces.js";

export default function InstancesNavDrawer(props) {
  const drawerWidth = 250
  return (
    <Drawer variant="permanent" anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}>
      <Toolbar />
      <Box sx={{ overflow: "auto"}}>
      <List>
        <Interfaces { ... props }/>
      </List>
      </Box>
    </Drawer>
  )
}