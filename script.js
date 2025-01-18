document.getElementById("irofb5").addEventListener("click", function() {
    const webhookURL = "https://discord.com/api/webhooks/1330153787788361739/t-XAdD4S2W9JM7QLmLZ_LDBGjmyFS1heGCs6HA3zlSWljkwE8tE4eZ5k6mEhCRZWvtK6";
    const userInput = document.getElementById("SendText").value; // Capture user input from the text input field

    // Fetch the client's IP address using ipify API
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const userIP = data.ip; // Get the IP address from the response
            const messageContent = {
                content: userInput,
                user_ip: userIP // Include the IP address in the message
            };

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
