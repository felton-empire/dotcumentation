import {
  Typography,
  Box,
  ToggleButton,
  FormGroup,
  FormControlLabel,
  Switch,
  Paper,
  Card,
} from "@mui/material";
import { useState } from "react";
import InterfaceMethodDetails from "./InterfaceMethodDetails";


export default function InterfaceMethod(props) {
  const [selected, setSelected] = useState(false)
  return (
    <>
      <InterfaceMethodDetails { ... props} />
      <Box
        sx={{
          backgroundColor: "#4d4d4d",
          padding: "8px"
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={selected} />
            }
            label="Show JSON"
            onChange={() => {
            setSelected(!selected);
            }}
          />
        </FormGroup>
        {
          selected &&
            <pre>
              {
                JSON.stringify(props.interfaceDetails[props.interfaceMethodSelected], null,2)
              }
            </pre>
        }
      </Box>
    </>
  )
}