const trawlingweb = require('../index.js')(
  'd546cfea51346e2ab908de1ba9b0a637d85ab9f2'
)

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
