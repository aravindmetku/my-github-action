var fs = require("fs");
var request = require("request");

var options = {
    method: 'POST',
    url: 'https://demo-eu.leanix.net/services/cicd-connector/v2/deployment/',
    headers:
        {
            'cache-control': 'no-cache',
            authorization: 'Bearer eyJraWQiOiI0MDJjODg3NTBjZmJhOGQzZTQ0NjE0YzQ5YjBlYzg3NiIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhcmF2aW5kLm1ldGt1QGxlYW5peC5uZXQiLCJwcmluY2lwYWwiOnsiaWQiOiJjYzU2MDA5NC1kMTNhLTRmZjMtYTI1Yi05ZTlhYTBlMmY3NWMiLCJ1c2VybmFtZSI6ImFyYXZpbmQubWV0a3VAbGVhbml4Lm5ldCIsInJvbGUiOiJBQ0NPVU5UVVNFUiIsInN0YXR1cyI6IkFDVElWRSIsImFjY291bnQiOnsiaWQiOiI1YjA1NWMxYi0yZWEyLTQ1YmItOTMwNS00ODZkODMxZGU0YjUiLCJuYW1lIjoibGVhbml4In0sInBlcm1pc3Npb24iOnsiaWQiOiJjOGExZTRiOC04NmUwLTRmOTAtODFhYi1jZDc5MWZkNDA3ZWUiLCJ3b3Jrc3BhY2VJZCI6IjdkODhkMWUwLTY1ZmEtNDU5ZS1iMjIzLWJmY2E4NzQwOGVhOSIsIndvcmtzcGFjZU5hbWUiOiJDaWRlck1pY3Jvc2VydmljZUludGVsbGlnZW5jZSIsInJvbGUiOiJBRE1JTiIsImN1c3RvbWVyUm9sZXMiOm51bGwsImFjY2Vzc0NvbnRyb2xFbnRpdGllcyI6bnVsbCwic3RhdHVzIjoiQUNUSVZFIiwiYXNVc2VyIjpudWxsfX0sImlzcyI6Imh0dHBzOi8vZXUtc3ZjLmxlYW5peC5uZXQiLCJqdGkiOiJmYTAzOWI0YS0xYTg5LTQxNmEtYTljYS0wNGUxYjYzNjg4OWEiLCJleHAiOjE2MTU4MDYyMDgsInJlZnJlc2hfdG9rZW4iOiIwOWVmNTQ1MC1lMTliLTQ5N2UtOTlkNC04ZmE4ZDVjZGUyNDAiLCJpbnN0YW5jZVVybCI6Imh0dHBzOi8vZGVtby1ldS5sZWFuaXgubmV0In0.cTlNpjJ3jQ6M3KoEgkW72vFgpm2U1v9yRwLuSPpNwbw756XyI-9nfml0bGZ-InI_oPUkKsKcomPP43pfDgygqI53IykC3yf6f-kkWryPFv8WVfb6If8hauE-0NZTXQPId7LzVf6GmScwyfJR4ZEd0FFTfGbbNQLlGa8zliRgZmBGMBVDhgp0olMtRHQJskEH9WdsSrPJu7nLOReE9JQfhckApEynvowIDhICqJ-863yJc3brp4yrf9s-8OlwK-Fa6hpngiKMAhD1qS8TY-2v0eAn_mAt6yONSAB8ZcCLsyTJ4YyoSmUGolsfCOM4iOIEe05DVaCDbYgOSF6JCeMJ3A',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
        },
    formData:
        {
            manifest: fs.createReadStream("./lx-manifest-demo.yml"),
            data: {
                value: JSON.stringify({"version": "9.1.0"}),
                options: {contentType: 'application/json'}
            }
        }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});
