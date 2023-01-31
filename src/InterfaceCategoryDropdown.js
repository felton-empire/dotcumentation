import { MenuItem, TextField } from "@mui/material";
import { useEffect } from "react";
import { getInterfaces } from "./api";
import { interfaceCategoryList } from "./vars";

export default function InterfaceCategoryDropdown(props) {

  useEffect(() => {
    async function loadInterfaceCategory() {
      if (props.apiConnected) {
        const interfaces = await getInterfaces(
          props.api, props.interfaceCategorySelected
        )
        props.setInterfaces(interfaces)
      }
    }
    loadInterfaceCategory()
  }, [props.apiConnected, props.interfaceCategorySelected]);

  function selectInterface(event) {
    props.setInterfaceCategorySelected(event.target.value)
  }

  return (
    <TextField sx={{ minWidth: 200}}
               id="APISection"
               select
               label="API Interfaces"
               defaultValue={interfaceCategoryList[0].endpoint}
               size={"small"}
               onChange={selectInterface}
    >
      {
        interfaceCategoryList.map((interfaceItem) => (
          <MenuItem
            key={interfaceItem.name}
            value={interfaceItem.endpoint}
          >
            {interfaceItem.name}
          </MenuItem>
          ))
      }
    </TextField>
  )
}