const trawlingweb = require('../index2.js')
trawlingweb.token = 'ea58ad7742681454540de07886bc64472'

const main = async () => {
  var resp
  var finaldata = []

  try {
    resp = await trawlingweb.query('sanidad AND girona')
    finaldata = resp.data
  } catch (error) {
    console.log(error)
  }

  while (resp.next) {
    try {
      resp = await trawlingweb.query(resp.next)
      finaldata = [...finaldata, ...resp.data]
    } catch (error) {
      console.log(error)
    }
  }

  console.log(`Final data rows recibed: ${finaldata.length}`)
}

main()
