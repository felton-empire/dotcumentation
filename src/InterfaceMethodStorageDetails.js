import FormattedDocumentation from "./FormattedDocumentation";

export default function InterfaceMethodStorageDetail (props) {
  return (
    <>
      <FormattedDocumentation docs={props.metadata.docs}/>
    </>
  )
}