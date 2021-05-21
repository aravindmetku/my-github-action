var FormData = require('form-data');
var fs = require('fs');
var http = require('http');

// abstract and promisify actual network request
async function makeRequest(formData, options) {
    return new Promise((resolve, reject) => {
        const req = formData.submit(options, (err, res) => {
            if (err) {
                return reject(new Error(err.message))
            }

            if (res.statusCode < 200 || res.statusCode > 299) {
                return reject(new Error(`HTTP status code ${res.statusCode}`))
            }

            const body = []
            res.on('data', (chunk) => body.push(chunk))
            res.on('end', () => {
                const resString = Buffer.concat(body).toString()
                resolve(resString)
            })
        })
    })
}

const formData = new FormData()

formData.append('manifest', fs.createReadStream('./lx-manifest-demo.yml'))
formData.append('dependencies', fs.createReadStream('./mvn-licenses.xml'))
formData.append('data', JSON.stringify({"version": "9.1.0", "dependencyManager": "MAVEN"}), {contentType: 'application/json'})

const options = {
    host: 'localhost:9690',
    path: '/deployment',
    method: 'POST',
    protocol: 'https:', // note : in the end
    headers: {
        Authorization: `Bearer eyJraWQiOiI0MDJjODg3NTBjZmJhOGQzZTQ0NjE0YzQ5YjBlYzg3NiIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhcmF2aW5kLm1ldGt1QGxlYW5peC5uZXQiLCJwcmluY2lwYWwiOnsiaWQiOiJjYzU2MDA5NC1kMTNhLTRmZjMtYTI1Yi05ZTlhYTBlMmY3NWMiLCJ1c2VybmFtZSI6ImFyYXZpbmQubWV0a3VAbGVhbml4Lm5ldCIsInJvbGUiOiJBQ0NPVU5UVVNFUiIsInN0YXR1cyI6IkFDVElWRSIsImFjY291bnQiOnsiaWQiOiI1YjA1NWMxYi0yZWEyLTQ1YmItOTMwNS00ODZkODMxZGU0YjUiLCJuYW1lIjoibGVhbml4In0sInBlcm1pc3Npb24iOnsiaWQiOiJjOGExZTRiOC04NmUwLTRmOTAtODFhYi1jZDc5MWZkNDA3ZWUiLCJ3b3Jrc3BhY2VJZCI6IjdkODhkMWUwLTY1ZmEtNDU5ZS1iMjIzLWJmY2E4NzQwOGVhOSIsIndvcmtzcGFjZU5hbWUiOiJDaWRlck1pY3Jvc2VydmljZUludGVsbGlnZW5jZSIsInJvbGUiOiJBRE1JTiIsImN1c3RvbWVyUm9sZXMiOm51bGwsImFjY2Vzc0NvbnRyb2xFbnRpdGllcyI6bnVsbCwic3RhdHVzIjoiQUNUSVZFIiwiYXNVc2VyIjpudWxsfX0sImlzcyI6Imh0dHBzOi8vZXUtc3ZjLmxlYW5peC5uZXQiLCJqdGkiOiJmYTAzOWI0YS0xYTg5LTQxNmEtYTljYS0wNGUxYjYzNjg4OWEiLCJleHAiOjE2MTU4MDYyMDgsInJlZnJlc2hfdG9rZW4iOiIwOWVmNTQ1MC1lMTliLTQ5N2UtOTlkNC04ZmE4ZDVjZGUyNDAiLCJpbnN0YW5jZVVybCI6Imh0dHBzOi8vZGVtby1ldS5sZWFuaXgubmV0In0.cTlNpjJ3jQ6M3KoEgkW72vFgpm2U1v9yRwLuSPpNwbw756XyI-9nfml0bGZ-InI_oPUkKsKcomPP43pfDgygqI53IykC3yf6f-kkWryPFv8WVfb6If8hauE-0NZTXQPId7LzVf6GmScwyfJR4ZEd0FFTfGbbNQLlGa8zliRgZmBGMBVDhgp0olMtRHQJskEH9WdsSrPJu7nLOReE9JQfhckApEynvowIDhICqJ-863yJc3brp4yrf9s-8OlwK-Fa6hpngiKMAhD1qS8TY-2v0eAn_mAt6yONSAB8ZcCLsyTJ4YyoSmUGolsfCOM4iOIEe05DVaCDbYgOSF6JCeMJ3A`
    },
}

makeRequest(formData, options).then(res => {
    console.log('res is', res)
})

