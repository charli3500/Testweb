document.getElementById("sendweb").addEventListener("click", function() {
    const webhookURL = "YOUR_DISCORD_WEBHOOK_URL";
    const messageContent = {
        content: document.getElementById("SendText").innerText
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
});
