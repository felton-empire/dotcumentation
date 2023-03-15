export const apiList =[
  {
    name: "Polkadot",
    endPoint: "wss://rpc.polkadot.io",
    selected: true
  },
  {
    name: "Kusama",
    endPoint: "wss://kusama-rpc.polkadot.io",
    selected: false
  },
  {
    name: "Acala",
    endPoint: "wss://acala-rpc.dwellir.com",
    selected: false
  },
  {
    name: "Karura",
    endPoint: "wss://karura-rpc.dwellir.com",
    selected: false
  },
  {
    name: "Moonbeam",
    endPoint: "wss://moonbeam.public.blastapi.io",
    selected: false
  },
  {
    name: "Moonriver",
    endPoint: "wss://moonriver.api.onfinality.io/public-ws",
    selected: false
  },
  {
    name: "Parallel",
    endPoint: "wss://rpc.parallel.fi",
    selected: false
  },
  {
    name: "Heiko",
    endPoint: "wss://heiko-rpc.parallel.fi",
    selected: false
  },
  {
    name: "Interlay",
    endPoint: "wss://api.interlay.io:443/parachain",
    selected: false
  },
  {
    name: "Kintsugi",
    endPoint: "wss://api-kusama.interlay.io:443/parachain",
    selected: false
  }
]

export const interfaceCategoryList = [
  {
    name: "Constants",
    endpoint: "api.consts",
  },
  {
    name: "Storage",
    endpoint: "api.query"
  },
  {
    name: "Extrinsics",
    endpoint: "api.tx"
  },
  {
    name: "Events",
    endpoint: "api.events"
  },
  {
    name: "Runtime",
    endpoint: "api.call"
  },
  {
    name: "JSON-RPC",
    endpoint: "api.rpc"
  },
  {
    name: "Errors",
    endpoint: "api.errors"
  }
]