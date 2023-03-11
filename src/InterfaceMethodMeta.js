import InterfaceMethodDefaultDetail from "./InterfaceMethodDefaultDetail";
import InterfaceMethodConstsDetail from "./InterfaceMethodConstsDetail";
import InterfaceMethodStorageDetail from "./InterfaceMethodStorageDetails";
import InterfaceMethodRPCDetail from "./InterfaceMethodRPCDetail";

export default function InterfaceMethodMeta(props) {
  const metadata = props.interfaceDetails[props.interfaceMethodSelected].meta

  switch(props.interfaceCategorySelected) {
    case "api.consts":
      return(
        <InterfaceMethodConstsDetail {...props}
          docs={metadata.docs}
        />
      )
    case "api.query":
      return(
        <InterfaceMethodStorageDetail {...props} metadata={metadata}/>
      )
    case "api.rpc":
    case "api.call":
      return(
        <InterfaceMethodRPCDetail metadata={metadata}/>
      )
    default:
      return(
        <InterfaceMethodDefaultDetail {...props} metadata={metadata}/>
      )
  }
}