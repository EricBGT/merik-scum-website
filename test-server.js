(async () => {
    try {
        const { queryGameServerInfo } = await import("steam-server-query");

        const server = await queryGameServerInfo(
            "89.222.108.82:27330",
            2,
            3000
        );

        console.log("Serveur trouvé !");
        console.log(server);

    } catch (error) {
        console.error("Erreur :", error.message);
    }
})();