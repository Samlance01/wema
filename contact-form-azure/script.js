document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const responseMessage = document.getElementById("responseMessage");

    responseMessage.textContent = "";

    try {
        const response = await fetch("https://firstapplication2025.azurewebsites.net/api/SubmitMessage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();

        if (response.ok && data.status === "success") {
            responseMessage.textContent = data.message;
            responseMessage.style.color = "green";
            document.getElementById("contactForm").reset();
        } else {
            responseMessage.textContent = data.message || "An error occurred. Please try again.";
            responseMessage.style.color = "red";
        }

    } catch (error) {
        console.error("Error:", error);
        responseMessage.textContent = "Failed to send message. Please try again later.";
        responseMessage.style.color = "red";
    }
});
