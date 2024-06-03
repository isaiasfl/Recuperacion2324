export default function addVehicle(url, postData, callback){
    fetch(url, {
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(postData),
    })
    .then(response =>{
        if(response.ok){
            console.log("Inserción correcta en addvehicle: " );
            return response.json();
        }else{
            alert("error")
            throw new Error("Error el añadir datos")
        }
    })
    .then(data => callback(data))
    .catch(error => console.error("Error Insertando datos", error));
}
