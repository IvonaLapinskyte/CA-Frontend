export async function singup(username, email, password, repeatPassword) {
  const data = { username, email, password, repeatPassword}




  if (password === repeatPassword) {

    
      
      const responses = await fetch('http://localhost:8090/user/register', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }})

      const json = await responses.text();
      console.log(json)
      console.log(responses)

      if (responses.status === 200 || responses.status === 201) {
        alert(json)
        return true;
      } else {
        alert(responses.message)
        throw new Error(responses.message);
      }
    
    }

}


