// Function to handle sign up
function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
  
    if (username && password) {
      // Store user in localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
  
      alert('Account created successfully!');
      showLoginForm(); // Switch to login form
    } else {
      alert('Please fill in all fields.');
    }
  }
  
  // Function to handle login
  function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    // Get stored user data
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
  
    if (username === storedUsername && password === storedPassword) {
      alert('Login successful!');
      showLoggedIn(username); // Show logged in state
    } else {
      alert('Incorrect username or password.');
    }
  }
  
  // Function to handle logout
  function logout() {
    alert('Logged out successfully!');
    showLoginForm(); // Switch back to login form
  }
  
  // Function to show the login form
  function showLoginForm() {
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('loggedIn').classList.add('hidden');
  }
  
  // Function to show the logged-in state
  function showLoggedIn(username) {
    document.getElementById('userDisplayName').textContent = username;
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('loggedIn').classList.remove('hidden');
  }