function showRegisterForm() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
  }
  
  function showLoginForm() {
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
  }
  
  function register() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    if (newUsername.trim() === '' || newPassword.trim() === '') {
      alert('Please enter a username and password.');
      return;
    }
    localStorage.setItem(newUsername, newPassword);
    alert('Registration successful! Please login with your new credentials.');
    showLoginForm();
  }
  
  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedPassword = localStorage.getItem(username);
    if (password === storedPassword) {
      document.getElementById('login').style.display = 'none';
      document.getElementById('securedPage').style.display = 'block';
    } else {
      alert('Invalid username or password.');
    }
  }
  
  function logout() {
    document.getElementById('securedPage').style.display = 'none';
    document.getElementById('login').style.display = 'block';
  }
  