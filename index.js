const axios = require('axios')
const VERSION = '1.0.10'

var config
if (typeof process !== 'undefined' && process.versions != null && process.versions.node != null) {
  const https = require('https')
  config = {
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  }
} else config = {}

const client = axios.create(config)

const trawlingweb = token => {
  if (!token) throw 'No token!'
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
            delete options.protocol
          }
          url = `${protocol}://api.trawlingweb.com/?token=${token}&q=${encodeURIComponent(query)}`
          if (options !== undefined) {
            Object.keys(options).forEach(key => {
              url += `&${key}=${options[key]}`
            })
          }
        }
        client
          .get(url, {
            headers: {
              'User-Agent': `trawlingweb-cli.js ${VERSION}`
            }
          })
          .then(response => {
            if (response && response.data && response.data.response) resolve(response.data.response)
            else resolve(response)
          })
          .catch(error => {
            error.url = url
            if (error && error.response && error.response.status)
              reject({
                status: error.response.status,
                error: error.response.statusText,
                url
              })
            else reject(error)
          })
      }
    })
  }
  return queryfunc
}

module.exports = trawlingweb
