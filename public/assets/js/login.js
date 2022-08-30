const btnLogin = document.querySelector('.login-form');
const btnSignup = document.querySelector('.signup-form');
console.log(btnSignup)

async function loginForm(e) {
    e.preventDefault();

    const username = document.querySelector('#username-login').value;
    const password = document.querySelector('#password-login').value;

    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }

    }
};

async function signupForm(e) {
    e.preventDefault();
    console.log('bugggggssss')
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        console.log('signup world')
        const response = await fetch('/api/user', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/');
          } else {
            alert(response.statusText);
          }
    }
};

btnLogin.addEventListener('submit', loginForm);
btnSignup.addEventListener('submit', signupForm);