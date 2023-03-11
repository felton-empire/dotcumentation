import YAML from "yaml";
import ReactMarkdown from "react-markdown";

export default function InterfaceMethodRPCDetail(props) {
  let metadata_string = JSON.stringify(props.metadata)
  let json_metadata = JSON.parse(metadata_string)
  delete json_metadata.description
  delete json_metadata.section
  delete json_metadata.method
  delete json_metadata.jsonrpc
  json_metadata.params.length == 0 &&
    delete json_metadata.params

  return(
    <>
      <ReactMarkdown>{props.metadata.description}</ReactMarkdown>
      <pre>{YAML.stringify(json_metadata)}</pre>
    </>
  )
}