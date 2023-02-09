import { ApiPromise, WsProvider } from "@polkadot/api";
import { options as acalaOptions } from "@acala-network/api";
import { typesBundlePre900 } from "moonbeam-types-bundle";

export async function setupApi(apiObject) {
  async function connect() {
    let api = {}
    const provider = await new WsProvider(apiObject.endpoint);
    if (apiObject.endpoint.includes("acala")) {
      api = await new ApiPromise(acalaOptions({provider}));
    } else if (apiObject.endpoint.includes("moonbeam") || apiObject.endpoint.includes("moonriver")){
      api = await new ApiPromise({provider: provider, typesBundle: typesBundlePre900})
    } else {
      api = await new ApiPromise({provider: provider})
    }
    const readyApi = await api.isReadyOrError
    return {
      api: readyApi,
      provider: provider,
      endpoint: apiObject.endpoint
    }
  }

  if (apiObject.api === undefined) {
    // New connection
    return await connect()
  } else if ( apiObject.endpoint !== apiObject.provider.__private_8_endpoints[0] ) {
    // New endpoint selected
    await apiObject.provider.disconnect()
    return await connect()
  } else {
    // Reusing the existing connection
    return apiObject
  }
}

export async function getInterfaces(api, interfaceCategory) {
  const interfacesList = await eval("api." + interfaceCategory)
  let interfacesArray = Object.entries(interfacesList).map((interfaceName, value) => (
      {
        "name": interfaceName[0],
        "selected": false,
        "details": interfaceName[1]
      })
  )
  return interfacesArray
}

export async function getInterfaceMethods(api, interfaceCategory, interfaceName) {
  const interfaceMethods = await eval("api." + interfaceCategory + "." + interfaceName)
  return interfaceMethods
}