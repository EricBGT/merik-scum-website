function copyServerIp(ip, messageId) {
    navigator.clipboard.writeText(ip).then(() => {
        const message = document.getElementById(messageId);

        if (message) {
            message.textContent = "IP copiée !";

            setTimeout(() => {
                message.textContent = "";
            }, 2000);
        }
    }).catch(() => {
        alert("Impossible de copier l'IP.");
    });
}