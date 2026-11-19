console.clear();
async function getUsers(){
  try{
    console.log("Fetching users"); 
    const response=await fetch("https://jsonplaceholder.typicode.com/users/3");
    if(!response.ok){
      throw new Error(`HTTP Error: ${response.status}`);

  }
ßdsssssa
  const users=await response.json();
  console.log("User recieved")
  console.log(users);
} catch(error){
  console.log("Something went wrong:");
  console.log(error.message);
} finally{
  console.log("Fetch operation completed ");
}
}

getUsers();