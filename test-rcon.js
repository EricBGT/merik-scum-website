require("dotenv").config();

const Rcon = require("rcon");

const options = {
    tcp: true,
    challenge: false
};

const rcon = new Rcon(
    "89.222.108.82",
    5400,
    process.env.RCON_PASSWORD,
    options
);

let authenticated = false;
let licenseAuthenticated = false;

rcon.on("auth", () => {
    authenticated = true;

    console.log("Connexion RCON réussie !");
    console.log("Authentification Prisoner Bot...");

    rcon.send(`#AUTH ${process.env.PRISONER_BOT_TOKEN}`);
});

rcon.on("response", (response) => {
    console.log("Réponse :", response);

    if (authenticated && !licenseAuthenticated) {
        licenseAuthenticated = true;

        console.log("Authentification Prisoner Bot réussie !");
        console.log("Envoi de ListPlayers...");

        rcon.send("ListPlayers");
        return;
    }

    if (licenseAuthenticated) {
        console.log("Réponse de ListPlayers :");
        console.log(response);

        rcon.disconnect();
    }
});

rcon.on("error", (error) => {
    console.error("Erreur RCON :", error.message);
});

rcon.on("end", () => {
    console.log("Connexion RCON fermée.");
});

rcon.connect();