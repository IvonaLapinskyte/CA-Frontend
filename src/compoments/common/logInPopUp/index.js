
export async function login(unameOrEmail, password) {


  const data = { unameOrEmail, password }
  const response = await fetch('http://localhost:8090/user/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const token = response.headers.get('Authorization');
  const json = await response.text();



  
  console.log(json)
  console.log(response)

  if (response.status === 200 || response.status === 201) {
    sessionStorage.setItem('user', unameOrEmail);
    sessionStorage.setItem('token', token);
    alert(json)
    return true;
  } else {
    alert(json.message)
    throw new Error(response.message);
  }


}



