function toggleBooks(){
    var bookList=document.getElementById("book-list");
    bookList.classList.toggle("hidden");
}
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Perform login authentication here
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Example validation (Replace with your own login logic)
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      // Redirect to another page or perform other actions upon successful login
    } else {
      alert("Invalid username or password. Please try again.");
      // Clear the input fields or perform other actions upon failed login
    }
  });
  <script>
function chargebattery() {
  var a;
  a = document.getElementById("charging");
  a.innerHTML = "&#xf244;";
  setTimeout(function () {
    a.innerHTML = "&#xf243;";
  }, 1000);
  setTimeout(function () {
    a.innerHTML = "&#xf242;";
  }, 2000);
  setTimeout(function () {
    a.innerHTML = "&#xf241;";
  }, 3000);
  setTimeout(function () {
    a.innerHTML = "&#xf240;";
  }, 4000);
}
chargebattery();
setInterval(chargebattery, 5000);
</script>