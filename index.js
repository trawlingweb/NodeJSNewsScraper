process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const axios = require('axios')
const VERSION = '1.0.4'


const trawlingweb = (token) => {
  const queryfunc = (query, options) => {
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
          url = `${protocol}://api.trawlingweb.com/?token=${token}&q=${query}`
          if (options !== undefined) {
            Object.keys(options).forEach((key) => {
              url += `&${key}=${options[key]}`
            })
          }
        }
        axios.get(url, {
          headers: {
            'User-Agent': `trawlingweb-cli.js ${VERSION}`
          }
        })
          .then((response) => {
            if (response && response.data && response.data.response) resolve(response.data.response)
            else resolve(response)
          })
          .catch((error) => {
            if (error && error.response && error.response.status) reject({ status: error.response.status, error: error.response.statusText })
            else reject(error)
          })
      }
    })
  }
  return queryfunc
}

module.exports = trawlingweb
