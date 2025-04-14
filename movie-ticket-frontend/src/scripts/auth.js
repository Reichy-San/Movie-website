// Helper: Save user
const saveUser = (email, password, username = "") => {
    const user = { email, password, username };
    localStorage.setItem(email, JSON.stringify(user));
};

// Helper: Get user
const getUser = (email) => {
    const data = localStorage.getItem(email);
    return data ? JSON.parse(data) : null;
};

// Signup
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("signupUsername").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        // Check if the user already exists
        if (getUser(email)) {
            document.getElementById("signupMessage").innerText = "User already exists!";
            return;
        }

        // Save user data
        saveUser(email, password, username);
        document.getElementById("signupMessage").innerText = "Signup successful! Redirecting to login...";

        // Redirect to login page after 2 seconds
        setTimeout(() => window.location.href = "login.html", 2000);
    });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        // Retrieve user data
        const user = getUser(email);

        // Check credentials
        if (!user || user.password !== password) {
            document.getElementById("loginMessage").innerText = "Invalid credentials!";
            return;
        }

        // Store user session
        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        document.getElementById("loginMessage").innerText = "Login successful! Redirecting...";

        // Redirect to homepage after 2 seconds
        setTimeout(() => window.location.href = "homepage.html", 2000);
    });
}
