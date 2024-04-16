export function addVehiculoApi(url, vehiculoData, callback){
    fetch(url, 
        {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(vehiculoData),
        }
    )
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else{
                throw new Error("Can not insert data");
            }
        })
        .then(data => callback(data))
        .catch(error => new Error("Can not insert data", error));
}