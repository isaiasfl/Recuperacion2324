export default function createPostAPI(url, postData, callback){
    fetch(url, {
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(postData),
    })
    .then(response =>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error("Error el añadir datos")
        }
    })

    .then(data => callback(data))
    .catch(error => console.error("Error Insertando datos", error));
}