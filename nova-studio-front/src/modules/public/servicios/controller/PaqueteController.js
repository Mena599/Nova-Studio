const PaqueteController = {}
const URL = 'http://localhost:8080/api/nova'

PaqueteController.findALL = async () => await fetch(URL, {
    method: 'GET',
    headers: { "Accept": "application/json" }
}).then(response => response.json())
    .then(result => result.data)   // <- OJO, ver punto 2
    .catch(console.log)

export default PaqueteController