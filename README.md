# trawlingweb

Official Javascript Trawlingweb client for Node.js and Browser

[https://trawlingweb.com](https://trawlingweb.com)

### Install from npm:

```sh
npm i trawlingweb
```

### Links:

[Register](https://dashboard.trawlingweb.com/register)

[Control Panel](https://dashboard.trawlingweb.com/)

[API documentation](https://trawlingweb.com/dashboard/documentation)

[Github Repository](https://github.com/trawlingweb)

[Npm Repository](https://www.npmjs.com/package/trawlingweb)

### Example:

```js
const trawlingweb = require('trawlingweb')
const trw = trawling('ea5DEada4jNERñc644725DEada324jNERñc64472')

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
      finaldata = [...finaldata, ...resp.data]
    } catch (error) {
      console.log(error)
    }
  }

  console.log(`Final data rows recibed: ${finaldata.length}`)
}

main()
```

### Example with params:

- protocol: "http"/"https"(default)
- ts: unixtimestamp in ms
- tsi: unixtimestamp in ms
- sort: "published"/"crawled"(default)
- order: "asc"/"desc"(default)
- format: "xml"/"json"(default)
- size: integer(100 default)

```js
resp = await trw('sanidad AND girona', { protocol: 'http', ts: 1522234179571, format: 'xml' })
console.log(resp)
```

### MIT License

Copyright (c) 2023 Trawlingweb

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
