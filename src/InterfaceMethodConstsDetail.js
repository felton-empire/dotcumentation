import FormattedDocumentation from "./FormattedDocumentation";
import YAML from "yaml"

export default function InterfaceMethodConstsDetail(props) {
  return(
    <>
      <pre>
        {YAML.stringify(props.interfaceDetails[props.interfaceMethodSelected])}
      </pre>
      <FormattedDocumentation docs={props.docs}/>
    </>
  )
}