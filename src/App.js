import "./App.css";
import { getInterfaceMethods, setupApi } from "./api";
import { apiList, interfaceCategoryList } from "./vars";
import { theme } from "./Theme.js";
import { Box, AppBar, Toolbar, Grid, ThemeProvider  } from "@mui/material"
import { useEffect, useState } from "react";
import InterfaceCategoryDropdown from "./InterfaceCategoryDropdown";
import InterfaceMethod from "./InterfaceMethod";
import ApiDropdown from "./ApiDropdown.js";
import InterfacesNavDrawer from "./InterfacesNavDrawer";

export default function App() {
  const [interfaces, setInterfaces] = useState("loading")
  const [apiEndpoints, setApiEndpoints] = useState(apiList)
  const [apiConnected, setApiConnected] = useState(false)
  const [api, setApi] = useState({
      endpoint: apiEndpoints[0].endPoint,
  })
  const [interfaceCategorySelected, setInterfaceCategorySelected] = useState(interfaceCategoryList[0].endpoint)
  const [interfaceDetails, setInterfaceDetails] = useState(false)
  const [interfaceSelected, setInterfaceSelected] = useState(false)
  const [interfaceMethodSelected, setInterfaceMethodSelected] = useState(false)

  useEffect(() => {
    async function connectApi() {
      const connectedApi = await setupApi(api)
      setApi(connectedApi)
      setApiConnected(true)
    }
    connectApi();
  }, [apiConnected]);

  useEffect(() => {
    async function getDetails() {
      if (interfaceSelected) {
        const details = await getInterfaceMethods(
          api,
          interfaceCategorySelected,
          interfaceSelected)
        setInterfaceDetails(details)
      }
    }
    getDetails()
  }, [interfaceSelected]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        flexgrow: 1,
        display: "flex",
      }}>
        <AppBar position="fixed" sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <ApiDropdown
                  apiEndpoints={apiEndpoints}
                  setApis={setApiEndpoints}
                  api={api}
                  setApi={setApi}
                  setInterfaces={setInterfaces}
                  setApiConnected={setApiConnected}
                />
              </Grid>
              <Grid item>
                <InterfaceCategoryDropdown
                  apiConnected={apiConnected}
                  api={api}
                  setInterfaceCategorySelected={setInterfaceCategorySelected}
                  setInterfaces={setInterfaces}
                  interfaceCategorySelected={interfaceCategorySelected}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <InterfacesNavDrawer
          interfaces={interfaces}
          setInterfaces={setInterfaces}
          api={api}
          setApi={setApi}
          setInterfaceSelected={setInterfaceSelected}
          interfaceDetails={interfaceDetails}
          setInterfaceDetails={setInterfaceDetails}
          setInterfaceMethodSelected={setInterfaceMethodSelected}
        />
        <Box component="main" sx={{
          flexgrow:1, p: 2
        }}>
          <Toolbar />
          <InterfaceMethod
            interfaceMethodSelected={interfaceMethodSelected}
            interfaceDetails={interfaceDetails}
            interfaceSelected={interfaceSelected}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
