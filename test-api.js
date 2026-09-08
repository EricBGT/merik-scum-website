(async () => {
    try {
        const response = await fetch(
            "https://api.battlemetrics.com/servers/38672194"
        );

        console.log("Statut HTTP :", response.status);

        const data = await response.json();

        console.log(JSON.stringify(data, null, 2));

    } catch (error) {
        console.error("Erreur :", error.message);
    }
})();