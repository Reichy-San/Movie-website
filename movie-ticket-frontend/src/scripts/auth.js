// Store test value to check if localStorage works
localStorage.setItem("test", "value");
console.log(localStorage.getItem("test")); // Should print 'value'

// Handle signup
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("signupUsername").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        const message = document.getElementById("signupMessage");

        if (username && email && password) {
            const user = { username, email, password };
            localStorage.setItem(email, JSON.stringify(user));
            message.textContent = "Account created successfully! Redirecting to login...";
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
        } else {
            message.textContent = "Please fill in all fields";
        }
    });
}

// Handle login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("loginMessage");

        if (email && password) {
            const storedUser = JSON.parse(localStorage.getItem(email));
            if (storedUser && storedUser.password === password) {
                sessionStorage.setItem("loggedInUser", email);
                message.textContent = "Login successful! Redirecting to homepage...";
                setTimeout(() => {
                    window.location.href = "homepage.html";
                }, 2000);
            } else {
                message.textContent = "Invalid email or password";
            }
        } else {
            message.textContent = "Please fill in all fields";
        }
    });
}
