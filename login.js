document.getElementById('login').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').values;
  const password = document.getElementById('password').values;

  const errorMessage = document.getElementById('error-message');
  
  // Clear previous error message
  errorMessage.textContent = "";
  errorMessage.style.display = "none";


  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password })
  })
  
  .then(response => response.json())
  .then(data => console.log('Success: ', data))
  .catch(error => {
    errorMessage.textContent = error.message;
    errorMessage.style.display = 'block';
  });

})