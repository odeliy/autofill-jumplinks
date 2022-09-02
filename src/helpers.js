function extractEndpoints(input) {
    let endpoints = input.split('\n')

    let anchorIndexes = endpoints.map((item) => {
      return item.indexOf('#')
    })

    endpoints = endpoints.map((item, index) => {
      return item.slice(anchorIndexes[index] + 1)
    })

    anchorIndexes = endpoints.map(item => {
      return item.indexOf('>')
    })

    endpoints = endpoints.map((item, index) => {
      return item.slice(0,anchorIndexes[index] - 1)
    })

    return endpoints
  }

  export {extractEndpoints}