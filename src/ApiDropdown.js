import { MenuItem, TextField, Tooltip } from "@mui/material";

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
    <TextField sx={{ minWidth: 200 }}
               id="selectedAPI"
               size="small"
               select
               defaultValue={props.apiEndpoints[0].endPoint}
               label="API"
               onChange={selectApi}
    >
      {
        props.apiEndpoints.map((api) => (
          <MenuItem value={api.endPoint} key={api.name}>
            <Tooltip
              value={api.endPoint}
              key={api.name}
              title={api.endPoint}
              placement="right"
              arrow
            >
              <div>{api.name}</div>
            </Tooltip>
          </MenuItem>
        ))
      }
    </ TextField>
  )

}