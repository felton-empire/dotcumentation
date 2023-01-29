import "./App.css";
import ApiDropdown from "./ApiDropdown.js";
import {getInterfacesTopSelected, setupApi} from "./api";
import { apiList, interfacesListFromVars } from "./vars";
import { theme } from "./Theme.js";
import InstancesNavDrawer from "./InstancesNavDrawer";
import { Box, AppBar, Toolbar, Grid, ThemeProvider  } from "@mui/material"
import {useEffect, useState} from "react";
import InterfacesDropdown from "./InterfacesDropdown";
import InterfaceDetail from "./InterfaceDetail";

export default function App() {
  const [interfaces, setInterfaces] = useState("loading")
  const [apiEndpoints, setApiEndpoints] = useState(apiList)
  const [apiConnected, setApiConnected] = useState(false)
  const [api, setApi] = useState({
      endpoint: apiEndpoints[0].endPoint,
  })
  const [interfacesList, setInterfacesList] = useState(interfacesListFromVars)
  const [interfaceSelected, setInterfaceSelected] = useState(interfacesList[0].endpoint)
  const [interfaceTopSelected, setInterfaceTopSelected] = useState()
  const [topDetails, setTopDetails] = useState(false)

  useEffect(() => {
    async function connectApi() {
      const connectedApi = await setupApi(api)
      setApi(connectedApi)
      setApiConnected(true)
    }
    connectApi();
  }, [apiConnected]);

  useEffect(() => {
    async function getTopDetails() {
      if (interfaceTopSelected) {
        const details = await getInterfacesTopSelected(
          api,
          interfaceSelected,
          interfaceTopSelected)
        setTopDetails(details)
      }
    }
    getTopDetails()
  }, [interfaceTopSelected]);

  return (
    <ThemeProvider theme={theme}>
          <Box sx={{ flexgrow: 1, display: "flex" }}>
          <AppBar position="fixed" sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1
          }}>
            <Toolbar>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}>
                <Grid item><ApiDropdown
                  apiEndpoints={apiEndpoints}
                  setApis={setApiEndpoints}
                  api={api}
                  setApi={setApi}
                  setInterfaces={setInterfaces}
                  setApiConnected={setApiConnected}/>
                </Grid>
                <Grid item><InterfacesDropdown
                  interfacesList={interfacesList}
                  apiConnected={apiConnected}
                  api={api}
                  setInterfaceSelected={setInterfaceSelected}
                  setInterfaces={setInterfaces}
                  interfaceSelected={interfaceSelected}/>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <InstancesNavDrawer
            interfaces={interfaces}
            setInterfaces={setInterfaces}
            api={api}
            setApi={setApi}
            setInterfaceTopSelected={setInterfaceTopSelected}
            topDetails={topDetails}/>
          <Box component="main" sx={{
            flexgrow:1, p: 2
          }}>
            <Toolbar />
            <InterfaceDetail
              interfaceTopSelected={interfaceTopSelected}
              api={api}
              interfaceSelected={interfaceSelected}
              topDetails={topDetails}/>
          </Box>
          </Box>
    </ThemeProvider>
  );
}
