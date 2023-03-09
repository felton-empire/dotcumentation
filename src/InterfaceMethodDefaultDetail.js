import FormattedDocumentation from "./FormattedDocumentation";
import FieldArgCards from "./FieldArgCards";
import {Typography} from "@mui/material";

export default function InterfaceMethodDefaultDetail (props) {
  return(
    <>
      <FormattedDocumentation docs={props.metadata.docs}/>
      {
        props.metadata.fields.length != 0 &&
          <Typography variant="h5" paddingTop="20px">Fields</Typography>
      }
      <FieldArgCards fields={props.metadata.fields}/>
    </>
  )
}