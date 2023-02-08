import { ApiPromise, WsProvider } from "@polkadot/api";
import { options as acalaOptions } from "@acala-network/api";

export async function setupApi(apiObject) {
  async function connect() {
    //TODO need to account for different apis for different endpoints... use an array
    const provider = await new WsProvider(apiObject.endpoint);
    const api = await new ApiPromise(acalaOptions({provider}));
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