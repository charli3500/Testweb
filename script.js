document.getElementById("irofb5").addEventListener("click", function() {
    const webhookURL = "removed4now";
    const userInput = document.getElementById("SendText").value; // Capture user input from the text input field

    // Fetch the client's IP address using ipify API
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const userIP = data.ip; // Get the IP address from the response
            console.log("User IP:", userIP); // Debug log for the IP address
            const messageContent = {
                content: `User Input: ${userInput}, User IP: ${userIP}` // Include the IP address in the message
            };
            console.log("Message Content:", messageContent); // Debug log for the message content

            fetch(webhookURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(messageContent)
            })
            .then(response => response.json())
            .then(data => {
                console.log("Message sent successfully:", data);
            })
            .catch(error => {
                console.error("Error sending message:", error);
            });
        })
        .catch(error => {
            console.error("Error fetching IP address:", error);
        });
});
