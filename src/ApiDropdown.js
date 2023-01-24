import { MenuItem, TextField } from "@mui/material";

export default function ApiDropdown(props){
  function selectApi(event) {
    props.setApi({
      ...props.api,
      endpoint: event.target.value
    })
    props.setApiConnected(false)
    props.setInterfaces("loading")
  }

  return (
    <TextField sx={{ minWidth: 200}}
               id="selectedAPI"
               size="small"
               select
               defaultValue={props.apiEndpoints[0].endPoint}
               label="API"
               onChange={selectApi}
    >
      {
        props.apiEndpoints.map((api) => (
          <MenuItem key={api.name}
                    value={api.endPoint}
          >
            {api.name}
          </MenuItem>
        ))
      }
    </ TextField>
  )

}