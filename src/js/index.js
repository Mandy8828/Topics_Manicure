export function handleAccount() {
  const urlParams = new URLSearchParams(window.location.search);
  const account = urlParams.get("account");

  if (account) {
    var loginButton = document.getElementById("loginButton");
    loginButton.innerHTML = "Welcome, " + account + "!";
    loginButton.onclick = null;

    var logoutButton = document.createElement("button");
    logoutButton.innerHTML = "登出";
    logoutButton.id = "logoutButton";
    document.getElementById("loginContainer").appendChild(logoutButton);

    logoutButton.addEventListener("click", logout);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // ... (其他代碼保持不變) ...

  document.getElementById("Homepage").onclick = function () {
    window.location = "./index.html";
  };

  document.getElementById("shape").onclick = function () {
    window.location = "./Nailstyle-0.html";
  };

  document.getElementById("guide").onclick = function () {
    window.location = "./Storeguide.html";
  };

  document.getElementById("appointmentform").onclick = function () {
    window.location = "./Appointmentform.html";
  };

  document.getElementById("nail1").onclick = function () {
    window.location = "./Nailstyle-1.html";
  };

  document.getElementById("nail2").onclick = function () {
    window.location = "./Nailstyle-2.html";
  };

  document.getElementById("nail3").onclick = function () {
    window.location = "./Nailstyle-3.html";
  };

  document.getElementById("nail4").onclick = function () {
    window.location = "./Nailstyle-4.html";
  };

  document.getElementById("loginButton").onclick = function () {
    window.location = "./member.html";
  };
});

function logout() {
  console.log("Logout function called");
  sessionStorage.removeItem("account");
  localStorage.removeItem("account");

  console.log("Session storage: ", sessionStorage.getItem("account"));
  console.log("Local storage: ", localStorage.getItem("account"));

  window.location.href = "./index.html";
}
