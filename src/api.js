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
    console.log("I'm at a new connection")
    return await connect()
  } else if ( apiObject.endpoint != apiObject.provider.__private_8_endpoints[0] ) {
    console.log("I'm at a new enpoint selected")
    await apiObject.provider.disconnect()
    return await connect()
  } else {
    console.log("Just reusing the existing endpoint")
    return apiObject
  }
}

export async function getInterfaces(api, interfaceEndpoint) {
  const interfaceList = await eval("api." + interfaceEndpoint)
  let interfacesArray = Object.entries(interfaceList).map((constantName, value) => (
      {
        "name": constantName[0],
        "selected": false,
        "details": constantName[1]
      })
  )
  return interfacesArray
}

export async function getInterfacesTopSelected(api, interfaceEndpoint, interfaceTopSelectedName) {
  const interfaceTopSelected = await eval("api." + interfaceEndpoint + "." + interfaceTopSelectedName)
  return JSON.stringify(interfaceTopSelected, null, 4)
}