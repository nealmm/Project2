const btnLogout = document.getElementById('logout');
console.log(btnLogout);

async function logout() {
    const response = await fetch('/api/user/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
}

btnLogout.addEventListener('click', logout);