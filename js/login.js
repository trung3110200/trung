//<!-- Add this inside the <body> tag after the form element -->
// Select the form and button elements
const loginForm = document.querySelector("form");
const loginButton = document.querySelector(".btn");

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    
    // Get user input
    const username = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;
    
    // Admin login verification (local check)
    if (username === "admin" && password === "admin") {
        alert("Welcome, Admin! You have successfully logged in.");
            window.location.href = "../HTML/homepage.html";
        // Example of connecting to an API for further processing
        const response = await connectToAPI(username, password);
        if (response.success) {
            console.log("Successfully connected to the API:", response.data);
            // Redirect to the admin dashboard or other secured page
            window.location.href = "../HTML/homepage.html";
        } else {
            console.error("API Connection Failed:", response.error);
        }
    } else {
        alert("Incorrect username or password.");
    }
});

// // Function to connect to an API endpoint (for future API integration)
// async function connectToAPI(username, password) {
//     try {
//         const response = await fetch("https://api.example.com/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ username, password }),
//         });

//         const data = await response.json();
        
//         // Example success response structure
//         if (data && data.token) {
//             return { success: true, data: data };
//         } else {
//             return { success: false, error: "Invalid credentials or API error." };
//         }
//     } catch (error) {
//         return { success: false, error: "Network error or API not reachable." };
//     }
// }

// Toggle Password Visibility
const togglePassword = document.querySelector(".toggle-password");
const passwordField = document.querySelector("input[type='password']");

togglePassword.addEventListener("click", () => {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        passwordField.type = "password";
        togglePassword.innerHTML = '<i class="fas fa-eye"></i>';
    }
});
