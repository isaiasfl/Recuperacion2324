export function addUserApi(url, userData, callback){
    fetch(url, 
        {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(userData),
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