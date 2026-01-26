const getItemsFromServer = async () => {
  const response = await fetch("http://localhost:3000/api/todos")
  return response.json()
}


const addItemToServer = async (text) => {  
  const res = await fetch("http://localhost:3000/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({text})
  })

  return await res.json()
  
}


export {getItemsFromServer, addItemToServer}