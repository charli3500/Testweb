document.getElementById("sendweb").addEventListener("click", function() {
    const webhookURL = "https://discord.com/api/webhooks/1330152322478637097/Udzt1O-i2zC293jGeU14mqGsthvtu4MeyRhFeAWJk-1FuqLTbBwOv1H4aXqL1nC1xkX_";
    const messageContent = {
        content: "Hello, this is a test message from the button!"
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
