function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
  
    loginForm.classList.toggle('active');
    signupForm.classList.toggle('active');
  }
  
  let users = {};
  
  
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    if (users[username] && users[username] === password) {
      alert("Login successful!");
      window.location.href = "verify.html";
    } else {
      alert("Invalid username or password.");
    }
  });
  

document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;
  
  if (users[username]) {
    alert("Username already exists!");
  } else {
    users[username] = password;
    alert("Registration successful!");
    window.location.href = "verify.html";
  }

});


document.getElementById('verify-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const code = document.getElementById('code').value;
  const status = document.getElementById('status');

  // Имитация проверки кода
  if (userEmail.includes((el)=>userEmail===)) {
    status.textContent = "✅ Email verified successfully!";
    status.style.color = "green";
  } else {
    status.textContent = "❌ Invalid verification code.";
    status.style.color = "red";
  }
});
