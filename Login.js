function login()
{
    let email = document.getElementById('floatingInput').value;
    let password = document.getElementById('floatingPassword').value;

    let loginObj = 
    {
        email,
        password
    }

    fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify(loginObj)
    })
}

let loginBtn = document.getElementById('login').addEventListener('click', login);
