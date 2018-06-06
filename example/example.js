const trawlingweb = require('../index.js')('ea5DEada4jNERñc644725DEada324jNERñc64472')

const main = async () => {
  var resp
  var finaldata = []

  try {
    resp = await trawlingweb('sanidad AND girona')
    finaldata = resp.data
  } catch (error) {
    console.log(error)
  }

  while (resp && resp.next) {
    try {
      resp = await trawlingweb(resp.next)
      finaldata = [...finaldata, ...resp.data]
    } catch (error) {
      console.log(error)
    }
  }

  console.log(`Final data rows recibed: ${finaldata.length}`)
}

main()
