process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const axios = require('axios')


const trawlingweb = {
  token: '',
  query (query, options) {
    return new Promise((resolve, reject) => {
      if (!query) reject('No request found.')
      else {
        var url
        if (query.includes('://api.trawlingweb.com')) url = query
        else {
          var protocol = 'https'
          if (options && options.protocol) {
            protocol = options.protocol
            delete(options.protocol)
          }
          url = `${protocol}://api.trawlingweb.com/?token=${trawlingweb.token}&q=${query}`
          if (options !== undefined) {
            Object.keys(options).forEach((key) => {
              url += `&${key}=${options[key]}`
            })
          }
        }
        console.log(url)
        axios.get(url)
          .then((response) => {
            if (response && response.data && response.data.response) resolve(response.data.response)
            else resolve(response)
          })
          .catch((error) => {
            if (error && error.response) reject(error.response)
            else reject(error)
          })
      }
    })
  }
}

module.exports = trawlingweb
