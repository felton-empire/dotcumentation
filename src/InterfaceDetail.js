import {Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {getInterfacesTopSelected} from "./api";


export default function InterfaceDetail(props) {
  const [topDetails, setTopDetails] = useState()

  useEffect(() => {
    async function getTopDetails() {
      const details = await getInterfacesTopSelected(
        props.api,
        props.interfaceSelected,
        props.interfaceTopSelected)
      console.log(details)
      setTopDetails(details)
    }
    getTopDetails()
  }, [props.interfaceTopSelected]);

  return (
    <Typography paragraph>
      {topDetails}
    </Typography>
  )
}