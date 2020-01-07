const trawlingweb = require('../index.js')
const trw = trawlingweb('d546cfea51346e2ab908de1ba9b0a637d85ab9f2')

const main = async () => {
  var resp
  var finaldata = []

  try {
    resp = await trw('sanidad AND girona')
    finaldata = resp.data
  } catch (error) {
    console.log(error)
  }

  while (resp && resp.next) {
    try {
      resp = await trw(resp.next)
      finaldata = [ ...finaldata, ...resp.data ]
    } catch (error) {
      console.log(error)
    }
  }

  console.log(`Final data rows recibed: ${finaldata.length}`)
}

main()
