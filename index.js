process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const axios = require('axios')


const trawlingweb = {
  token: '',
  query (query, options) {
    return new Promise((resolve, reject) => {
      if (!query) reject('No query recibed')
      else {
        if (query.includes('api.trawlingweb.com')) {
          axios.get(query)
            .then((response) => {
              if (response.data.response.next) trawlingweb.nexturl = response.data.response.next
              else delete(trawlingweb.nexturl)
              resolve(response.data.response)
            })
            .catch((error) => {
              reject(error.response)
            })
        } else {
          const protocol = options && options.http? 'https':'https'
          const url = `${protocol}://api.trawlingweb.com/?token=${trawlingweb.token}&q=${query}`
          axios.get(url)
            .then((response) => {
              if (response.data.response.next) trawlingweb.nexturl = response.data.response.next
              else delete(trawlingweb.nexturl)
              resolve(response.data.response)
            })
            .catch((error) => {
              reject(error.response)
            })
        }
      }
    })
  },
  next () {
    return new Promise((resolve, reject) => {
      if (trawlingweb.next) {
        axios.get(trawlingweb.nexturl)
          .then((response) => {
            if (response.data.response.next) trawlingweb.nexturl = response.data.response.next
            else delete(trawlingweb.nexturl)
            resolve(response.data.response)
          })
          .catch((error) => {
            reject(error.response)
          })
      } else reject({ error: 'No more data' })
    })
  }
}

module.exports = trawlingweb
