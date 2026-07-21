const PaqueteController = {}

const URL = "http://localhost:5173/data/servicios.json"

PaqueteController.findALL = async () => await fetch(
    URL, {
    method: 'GET',
    headers: {
        "Conted-type": "application.json",
        "Accept": "application/json"
    }
}
).then(response => response.json())
    .then(result => (result)).catch(console.log)

export default PaqueteController