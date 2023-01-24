import { MenuItem, TextField } from "@mui/material";
import { useEffect } from "react";
import { getInterfaces } from "./api";


export default function InterfacesDropdown(props) {

  useEffect(() => {
    async function loadInterface() {
      if (props.apiConnected) {
        const interfaces = await getInterfaces(
          props.api, props.interfaceSelected
        )
        props.setInterfaces(interfaces)
      }
    }
    loadInterface()
  }, [props.apiConnected, props.interfaceSelected]);

  function selectInterface(event) {
    props.setInterfaceSelected(event.target.value)

  }

  return (
    <TextField sx={{ minWidth: 200}}
               id="APISection"
               select
               label="API Interface"
               defaultValue={props.interfacesList[0].endpoint}
               size={"small"}
               onChange={selectInterface}
    >
      {
        props.interfacesList.map((interfaceItem) => (
          <MenuItem key={interfaceItem.name}
                    value={interfaceItem.endpoint}
          >{interfaceItem.name}</MenuItem>
          ))
      }
    </TextField>
  )
}